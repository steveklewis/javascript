// levelup-pack.js
var bytewise = require('bytewise');
var msgpack = require('msgpack-js');

// Since this is not the innermost layer, we will use the last
// argument, 'next' to invoke the next layer.
//
// All method receive keys so they must be serialized with
// bytewise for couchdb-like ordering of records.
//
// Methods that return values (get) must all override the
// callback to convert the buffer back to javascript objects.
module.exports = {
  get: function(key, cb, next) {
    next(bytewise.encode(key), function(err, value) {
      if (err) return cb(err);
      cb(null, msgpack.decode(value));
    });
  },

  put: function(key, value, cb, next) {
    next(bytewise.encode(key), msgpack.encode(value), cb);
  },

  del: function(key, cb, next) {
    next(bytewise.encode(key), cb);
  }
};
