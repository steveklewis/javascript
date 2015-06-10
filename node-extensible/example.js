var levelup = require('./levelup');
var db = levelup();
var k = new Buffer([1,2,3]);
var v = new Buffer([1,2,3,4]);

db.open('./db-example', function(err) {
  db.put(k, v, function(err) {
    db.get(k, function(err, val) {
      console.error(val);
    });
  });
});
