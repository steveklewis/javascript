var RSVP = require('rsvp');


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
  console.log("Tossed a " + tossWord.toUppercase()+ ".");
}

toss()
  .then(logAndTossAgain)
  .then(logAndTossAgain)
  .then(logAndTossAgain)

