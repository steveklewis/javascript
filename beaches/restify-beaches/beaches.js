var restify = require('restify');
var levelup = require('levelup');
var beachData = require('./beach-data.js');

console.log('Initializing leveldb');
var db = levelup('./mydb');


function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function putBeach(req, res, next) {
  db.get('beach', function(err, value) {
    value = req.body.name
    //db.put
  });

}

function postBeach(req, res, next) {

  var keyVal = beachData.getKeyVal(req.body);
  db.put(keyVal.key, keyVal.value, function(err) {
    if (err) {
      res.send('error ' + err);
      next();
    }

    db.get(keyVal.key, function(err, value) {
      res.send(JSON.parse(value));
      next();
    });
  });
}

function getAllBeaches(req, res, next) {
  var beaches = [];
  var stream = db.createReadStream()
    .on('data', function(data) {
      if (data.key.startsWith(beachData.prefix)) {
        beaches.push(JSON.parse(data.value));
      }
    })
    .on('error', function(err) {
      console.log('Error', err);
      res.send("Error");
      next();
    })
    .on('close', function() {
      res.send(beaches);
      stream.destroy();
      next();
    })
}

function getBeach(req, res, next) {
    db.get('beach', function(err, value) {
      res.send('get beach ' + value);
      next();
    });
}

var server = restify.createServer();
server.use(restify.bodyParser());

server.get('/hello/:name', getBeach);
server.head('/hello/:name', respond);

server.post('/beaches', postBeach);
server.get('/beaches', getAllBeaches);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
