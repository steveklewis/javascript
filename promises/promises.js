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
  return new RSVP.Promise(function(fulfill, reject) {
    var n = Math.floor(Math.random() * 6) + 1;
    fulfill(n);
  });
}


function logAndTossAgain(toss) {
  var tossWord = tossTable[toss];
  console.log("Tossed a " + tossWord.toUpperCase()+ ".");
}

function logErrorMessage(error) {
  dumpError(error);
  
  console.log('Oops: ' + error.message);
}

toss()
  .then(logAndTossAgain)
  .then(logAndTossAgain)
  .then(logAndTossAgain)
  .then(null, logErrorMessage);

