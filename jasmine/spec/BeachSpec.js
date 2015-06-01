describe("Beach", function() {
  it("should be surfable if the score is 90", function() {
    var beach = new Beach();
    beach.score = 90;
    expect(beach.surfable()).toBe(true);
  });
  it("should not be surfable if the score is below 70", function() {
    var beach = new Beach();
    beach.score = 68;
    expect(beach.surfable()).toBe(false);
  });
});
