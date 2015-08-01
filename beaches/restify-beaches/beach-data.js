/**
 * beach-data.js is a small module that performs the
 * business logic to get the leveldb key and value
 * derived from the beach instance.
 *
 * Putting this in a separate module allows me to test
 * this without importing leveldb or restify.
 */
var beachesPrefix = 'beaches';

function getKeyVal(beachObj) {
  var key = beachesPrefix + beachObj.name;
  return {key: key, value: JSON.stringify(beachObj)};
}

function getKey(name) {
  return beachesPrefix + name;
}

module.exports.getKeyVal = getKeyVal;
module.exports.prefix = beachesPrefix;
module.exports.getKey = getKey;
