
var scoreFunctions = function() {
  this.increment = function() {    
    return this.set('score', this.score + 1);
  };
  this.decrement = function() {
    return this.set('score', this.score - 1);
  };
  return this;
};

var incrementScore = function(beach) {
  return beach.set('score', beach.get('score') + 1);
}

module.exports.scoreFunctions = scoreFunctions;
module.exports.incrementScore = incrementScore;
