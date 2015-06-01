#!javascript
// Beach.js

exports.newBeach = function() {
  return new Beach()
}
function Beach() {
  this.score = 0;
};
Beach.prototype.surfable = function() {
  return this.score > 70;
};
