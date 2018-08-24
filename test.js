const sum = require('./sum');
const splitAt = require('./split');

test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toEqual(2);
});

test('adds -1 + -1 to equal -2', () => {
    expect(sum(-1, -1)).toEqual(-2);
});

test('split  1@2@3 equal array["1","2","3"]', () => {
    expect(splitAt("1@2@3")).toEqual(["1","2","3"]);
});

