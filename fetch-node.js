"use strict";

var realFetch = require('node-fetch');

var fetch = function(url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ is converted to https://github.com/
  // https://github.com/matthew-andrews/isomorphic-fetch/pull/10
	if (/^\/\//.test(url)) {
		url = 'https:' + url;
  }

	return realFetch.call(this, url, options);
};

module.exports = {
  fetch: fetch,
  Response: realFetch.Response,
  Headers: realFetch.Headers,
  Request: realFetch.Request,
};