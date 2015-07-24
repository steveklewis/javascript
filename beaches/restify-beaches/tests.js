var model = require('./beach-model.js');
var funcs = require('./beach-functions.js');

test("a basic test example", function () {
  var beach1 = new model.newBeach('St. Pete', 90);
  var beach2 = funcs.incrementScore(beach1);
  equal(91, beach2.get('score'));
});
