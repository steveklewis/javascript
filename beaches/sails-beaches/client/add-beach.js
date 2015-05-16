var Client = require('node-rest-client').Client;

client = new Client();

var args = {
  data: { name: "Second beach", score: 80.0},
  headers: {"Content-Type": "application/json"}
};

client.post("http://localhost:1337/beach", args, function(data, response) {
  console.log(data);
  console.log(response);
});
