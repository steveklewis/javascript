#!javascript

var beaches = require("../src/Beach");

describe("Beach", function() {
  it("should be surfable if the score is 90", function() {
    var beach1 = beaches.newBeach();
    beach1.score = 90;
    expect(beach1.surfable()).toBe(true);
  });
  it("should not be surfable if the score is below 70", function() {
    var beach1 = beaches.newBeach();
    beach1.score = 68;
    expect(beach1.surfable()).toBe(false);
  });
});
