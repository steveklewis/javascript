var Immutable = require('immutable');

var newBeach = function(name, score) {
  return Immutable.Map({name: name, score:score});
}

module.exports.newBeach = newBeach;
