var levelup = require('./levelup');
var levelupPack = require('./levelup-pack');

var db = levelup();
// wrap into the serialization layer
db.$use(levelupPack);

var k = [1,2,3];
var v = {name: 'john doe'};

db.open('./db-example', function(err) {
  db.put(k, v, function(err) {
    db.get(k, function(err, val) {
      console.log(val);
    });
  });
});
