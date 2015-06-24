var assert = require('assert');
var restify = require('restify');

var client = restify.createJsonClient({
	url: 'http://127.0.0.1:8080',
	version: '*'
});

client.post('/beaches', {'name': 'what', 'score': 100}, function(err, req, res, obj) {
  assert.ifError(err);
  console.log(typeof(obj));
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', obj);
});


client.get('/beaches', function(err, req, res, obj) {
  //var beachesArray = JSON.parse(obj);
  assert.ifError(err);

  console.log(typeof(obj));
  console.log('%d -> %j', res.statusCode, res.headers);
  console.log('%j', obj);
});
