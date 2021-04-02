const sum = require('./sum.js');

test('Should add two numbers together and return the sum', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = sum(83,6);
  console.log("add 2 numbers 83 + 6 should be 89", result);
  expect(result).toBe(89);
});


test('Should add positive to negative number', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = sum(83, -6)
  console.log("add 2 numbers 83 + 6 should be 89", result);
  expect(result).toBe(77);
});

test('Should add two negative numbers', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = sum(-83, -6)
  console.log("add 2 numbers 83 + 6 should be 89", result);
  expect(result).toBe(-89);
});


// Missing input path
test('Should fail if I give it only one argument', () => {
  // THIS IS WHERE TEST CODE GOES
  expect(() => {
    sum(83);
  }).toThrow(`You're missing an argument`);
});

// Bad input path
test('Should convert number strings to numbers eg ("9" + "3")', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = sum("9", "3")
  console.log("add 2 numbers 83 + 6 should be 89", result);
  expect(result).toBe(12);
});

describe('the summy-whummy function', () => {
  test('should add numbers together, but nore cute', () => {
    expect(summyWhummy(3, 10)).toBe("🔔");
  })
})