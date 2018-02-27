// Add chai's expect to the global scope
global.expect = require('chai').expect;

// Enable fake server
const nock = require('nock');
before(() => {
  nock('https://lquixa.da')
    .persist()
    .get('/succeed.txt')
    .reply(200, 'hello world.');

  nock('https://lquixa.da')
    .persist()
    .get('/fail.txt')
    .reply(404, 'good bye world.');
});
