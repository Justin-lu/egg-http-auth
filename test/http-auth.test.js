'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/http-auth.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/http-auth-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, httpAuth')
      .expect(200);
  });
});
