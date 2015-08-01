var restify = require('restify');

var beachData = require('./beach-data.js');

function putBeach(db, req, res, next) {
  console.log("Putbeach")
  db.get('beach', function(err, value) {
    value = req.body.name
    //db.put
  });

}

function postBeach(db, req, res, next) {
  var keyVal = beachData.getKeyVal(req.body);
  console.log("Putting key " + keyVal.key);
  db.put(keyVal.key, keyVal.value, function(err) {
    if (err) {
      res.send(new InternalServerError(err));
      next();
    }

    // This could be removed, just return the given
    // value sent in.
    db.get(keyVal.key, function(err, value) {
      res.send(201, JSON.parse(value));
      next();
    });
  });
}

function getAllBeaches(db, resourceFunc, req, res, next) {
  var beaches = [];
  var stream = db.createReadStream()
    .on('data', function(data) {
      if (data.key.startsWith(beachData.prefix)) {
        beaches.push(JSON.parse(data.value));
      }
    })
    .on('error', function(err) {
      console.log('Error', err);
      res.send(new InternalServerError(err));
      next();
    })
    .on('close', function() {
      res.send(resourceFunc(beaches));
      stream.destroy();
      next();
    });
}

function getBeach(db, resourceFunc, req, res, next) {
  var beachKey = beachData.getKey(req.params.name);
  console.log("Trying to get " + beachKey);
  db.get(beachKey, function(err, value) {
    if (err !== null && err.notFound) {
      res.send(new restify.NotFoundError(err));
    } else {
      res.send(resourceFunc(value));
    }
    next();
  });
}

module.exports.getBeach = getBeach;
module.exports.getAllBeaches = getAllBeaches;
module.exports.postBeach = postBeach;
module.exports.putBeach = putBeach;
