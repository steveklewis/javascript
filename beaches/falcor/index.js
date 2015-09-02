// index.js
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var app = express();

var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

// client.create({
//   index: 'falcor',
//   type: 'beach',
//   id: '1',
//   body: {
//     name: "Clearwater",
//     score: 90
//   }
// }, function (error, response) {
//   console.log(error, response);
// });

app.use('/model.json', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Router([
    {
      // match a request for the key "greeting"    
      route: "greeting",
      // respond with a PathValue with the value of "Hello World."
      get: function() {
        console.log("Returning greeting");
        return {path:['greeting'], value: 'Greeting'};
        //return {path:['greeting'], value: {name: 'Clearwater', score:90}};
        client.get({
          index: 'falcor',
          type: 'beach',
          id: '1'
        }, function (error, response) {
          console.log(response);
          console.log(typeof(response._source));
          return {path:["greeting"], value: response._source};
        });
      }
    }
  ]);
}));

// statically host all files in current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);
