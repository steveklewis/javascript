var levelup = require('./levelup');
var levelupPack = require('./levelup-pack');
var levelupPromise = require('./levelup-promise');

var db = levelup()
// serialization
db.$use(levelupPack);
// promises
db.$use(levelupPromise);

var k1 = [1,2,3], k2 = [4,5,6];
var v1 = {name: 'foo'}, v2 = {name: 'bar'};

db.open('./db-example').then(function(err) {
  return db.put(k1, v1);
}).then(function() {
  return db.put(k2, v2);
}).then(function() {
  return db.get(k2);
}).then(function(val) {
  console.log(val);
  return db.get(k1);
}).then(function(val) {
  console.log(val);
}).catch(function(err) {
  console.error(err);
});
