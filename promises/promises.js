var RSVP = require('rsvp');
var lineNum = require('./lineNum.js');

function dumpError(err) {
  if (typeof err == 'object') {
    if (err.message) {
      console.log('\nMessage: ' + err.message);
    }
    if (err.stack) {
      console.log('\nStacktrace:');
      console.log('=======================');
      console.log(err.stack);
    }
  } else {
    console.log('dumpError :: argument is not an object');
  }
}



var tossTable = {
  1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six'
};

function toss() {  
  var n = Math.floor(Math.random() * 6) + 1;
  return new RSVP.resolve(n);
}

function threeDice() {
  var tosses = [];
  function add(x, y) {
    return x + y;
  }

  for (var i = 0; i < 3; i++) {
    tosses.push(toss()); 
  }

  return RSVP.all(tosses).then(function(results) {
    return results.reduce(add);
  });
}

function logResults(result) {
  console.log("Rolled " + result + " with three dice.");
}

function logErrorMessage(error) {
  dumpError(error);  
  console.log('Oops: ' + error.message);
}

threeDice()
  .then(logResults)
  .then(null, logErrorMessage);


