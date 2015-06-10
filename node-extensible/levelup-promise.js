// levelup-promise.js
var rsvp = require('rsvp');

module.exports = function() {
  var _this = this; // reference to the object
  var rv = {};

  // this assumes all methods follow node convention
  // of callback as last arg
  this.$eachMethodDescriptor(function(method) {
    // redefine the method signature by removing the
    // last 'cb' parameter
    var newArgs = method.args.slice();
    var lastArg = newArgs.pop();
    // Only wrap if the last argument is named 'cb'
    if (lastArg !== 'cb')
      return;
    _this.$defineMethod(method.name, newArgs.join(','));
    rv[method.name] = function() {
      var next = arguments[arguments.length - 4];
      // get all the args up to and excluding 'next'
      var args = Array.prototype.slice.call(arguments, 
                                            0, 
                                            arguments.length - 4);
      return new rsvp.Promise(function(resolve, reject) {
        // push the callback for the next layer, which
        // still has the old method signature
        args.push(function(err, result) {
          if (err) return reject(err);
          // resolve passing all values returned
          resolve(result);
        });

        next.apply(this, args);
      });
    };
  });
  return rv;
};
