var elasticsearch = require('elasticsearch');
var jsonGraph = require('falcor-json-graph');
var Q = require('q');



var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

function get() {
  var defer = Q.defer();
  client.get({
    index: 'falcor',
    type: 'beach',
    id: '1'
  }).then(function(response) {
    console.log(response);
    console.log(response._source);
    console.log(jsonGraph.atom(response._source));
    defer.resolve(jsonGraph.atom(response._source));
  }, function(err) {
    console.trace(err.message);
    defer.reject(err);
  });

  return defer.promise;
}

var test = get();
console.log("Test:" + test.then(function (value) {
  console.log("Test: " + value);
  console.log("Test: " + value.value.name);
  console.log("Test: " + value.value.score);
}));

