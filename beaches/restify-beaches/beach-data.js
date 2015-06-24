
var beachesPrefix = 'beaches';

function getKeyVal(beachObj) {
  var key = beachesPrefix + beachObj.name;
  return {key: key, value: JSON.stringify(beachObj)};
}


module.exports.getKeyVal = getKeyVal;
