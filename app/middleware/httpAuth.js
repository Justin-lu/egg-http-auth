'use strict';

const assert = require('assert');

module.exports = (options) => {
  return function* backdoorAuth(next) {
    const { username, password, match } = options;
    assert.strictEqual(typeof username, 'string', 'Must set `app.config.httpAuth.username` when httpAuth plugin enable');
    assert.strictEqual(typeof password, 'string', 'Must set `app.config.httpAuth.password` when httpAuth plugin enable');
    // if config match and does not match the url, that skip this middleware
    if (match && !match.test(this.request.url)) {
      yield next;
    } else {
      const auth = this.request.get('authorization');
      if (!auth) {
        this.status = 401;
        this.set('WWW-Authenticate', 'Basic realm="Secure Area"');
        this.body = '<html><body>Need some creds son</body></html>';
      } else if (auth) {
        // Split on a space, the original auth looks like  "Basic Y2hhcmxlczoxMjM0NQ==" and we need the 2nd part
        const tmp = auth.split(' ');
        // create a buffer and tell it the data coming in is base64
        const buf = new Buffer(tmp[1], 'base64');
        // read it back out as a string
        // At this point plainAuth = "username:password"
        const plainAuth = buf.toString();
        const [ u, p ] = plainAuth.split(':'); // split on a ':'
        if ((u === username) && p === password) {
          yield next;
        } else {
          this.status = 401;
          this.set('WWW-Authenticate', 'Basic realm="Secure Area"');
          this.body = '<html><body>You shall not pass</body></html>';
        }
      }
    }
  };
};
