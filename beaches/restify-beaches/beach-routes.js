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

module.exports.getBeach = getBeach;
module.exports.getAllBeaches = getAllBeaches;
module.exports.postBeach = postBeach;
module.exports.putBeach = putBeach;
