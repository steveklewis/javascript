var assert = require('assert');
var restify = require('restify');

var client = restify.createJsonClient({
	url: 'http://127.0.0.1:8080',
	version: '*'
});

client.post('/beaches', {'name': 'what','score': 100}, function(err, req, res, obj) {
  console.log("Post beach");
  assert.ifError(err);
  console.log(typeof(obj));
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', obj);
});


client.get('/beaches', function(err, req, res, obj) {
  console.log("All beaches");
  assert.ifError(err);
  console.log(typeof(obj));
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', obj);
});


client.get('/beaches/' + 'what', function(err, req, res, obj) {
  console.log("Single beach");
  if (err != null && err.statusCode === 404) {
    console.log("/beaches/what not found");
    return;
  }
  assert.ifError(err);
  console.log(typeof(obj));
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', obj);
});
