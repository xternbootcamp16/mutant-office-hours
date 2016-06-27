describe("The 'toBe' matcher compares with ===", function() {
  it("and has a positive case", function() {
    expect(true).toBe(true);
  });

  it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });
});

describe("A spec using beforeEach and afterEach", function() {
  var foo = 0;

  beforeEach(function() {
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});
