# egg-http-auth

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-http-auth.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-http-auth
[travis-image]: https://img.shields.io/travis/eggjs/egg-http-auth.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-http-auth
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-http-auth.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-http-auth?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-http-auth.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-http-auth
[snyk-image]: https://snyk.io/test/npm/egg-http-auth/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-http-auth
[download-image]: https://img.shields.io/npm/dm/egg-http-auth.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-http-auth

egg plugin for HTTP basic and digest access authentication.

## Install

```bash
$ npm i egg-http-auth --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.httpAuth = {
  enable: true,
  package: 'egg-http-auth',
  // which routes you want to using this middleware
  match: '',
  // which routes you want to ignore this middleware
  // ignore: ''
  // match: (ctx) {
  // }
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.httpAuth = {
  username: 'username',
  password: 'password',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

exports.httpAuth = {
  enable: true,
  package: 'egg-http-auth',
  match: '/api/v1/backdoor',
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/Justin-lu/egg-http-auth/issues).

## License

[MIT](LICENSE)
