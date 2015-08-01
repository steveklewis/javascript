var restify = require('restify');

var beachData = require('./beach-data.js');

function putBeach(db, req, res, next) {
  console.log("Putbeach")
  db.get('beach', function(err, value) {
    value = req.body.name
    //db.put
  });

}

function postBeach(deps, req, res, next) {
  var keyVal = deps.keyFuncs.getKeyVal(req.body);
  deps.db.put(keyVal.key, keyVal.value, function(err) {
    if (err) {
      res.send(new InternalServerError(err));
      next();
    }

    // This could be removed, just return the given
    // value sent in.
    deps.db.get(keyVal.key, function(err, value) {
      res.send(201, JSON.parse(value));
      next();
    });
  });
}

function getAllBeaches(deps, req, res, next) {
  var beaches = [];
  var stream = deps.db.createReadStream()
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
      res.send(deps.resourceFunc(beaches));
      stream.destroy();
      next();
    });
}


function getBeach(deps, req, res, next) {
  var beachKey = deps.keyFuncs.getKey(req.params.name);
  deps.db.get(beachKey, function(err, value) {
    if (err !== null && err.notFound) {
      res.send(new restify.NotFoundError(err));
    } else {
      res.send(deps.resourceFunc(value));
    }
    next();
  });
}

module.exports.getBeach = getBeach;
module.exports.getAllBeaches = getAllBeaches;
module.exports.postBeach = postBeach;
module.exports.putBeach = putBeach;
