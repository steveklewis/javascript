var assert = require('assert');
var restify = require('restify');

var client = restify.createJsonClient({
	url: 'http://127.0.0.1:8080',
	version: '*'
});

client.post('/beaches', {'name': 'what', 'score': 100}, function(err, req, res, obj) {
  assert.ifError(err);

  var jsObj = JSON.parse(obj);
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', jsObj);
});
