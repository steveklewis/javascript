function Beach() {
  this.score = 0;
}
Beach.prototype.surfable = function() {
  return this.score > 70;
};
