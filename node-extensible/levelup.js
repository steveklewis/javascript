// levelup.js
var leveldown = require('leveldown');
var extensible = require('extensible');

var levelup = extensible();

levelup.$defineMethod('open', 'location, cb');
levelup.$defineMethod('get', 'key, cb');
levelup.$defineMethod('put','key, value, cb');
levelup.$defineMethod('del','key,cb');

levelup.$use({
  open: function(location, cb) {
    this.db = leveldown(location);
    this.db.open(cb);
  },

  get: function(key, cb) {
    this.db.get(key, cb);
  },

  put: function(key, value, cb) {
    this.db.put(key, value, cb);
  },

  del: function(key, cb) {
    this.db.del(key, cb);
  }
});

// Export a constructor
module.exports = function(options) {
  return levelup.$fork();
};
