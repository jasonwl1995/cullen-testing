const fizzBuzz = require('./fizzBuzz.js');

test('number that is divisible by 3 and 5 should return FizzBuzz', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = fizzBuzz(30);
  console.log("divisible by 3 and 5", result);
  expect(result).toEqual("FizzBuzz");
});


test('number that is divisible by 3 should return Fizz', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = fizzBuzz(12)
  console.log("divisible by 3", result);
  expect(result).toThrow("Fizz");
});

test('number that is divisible by 5 should return Buzz', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = fizzBuzz(10)
  console.log("divisible by 5", result);
  expect(result).toThrow("Buzz");
});


test('negative number', () => {
  // THIS IS WHERE TEST CODE GOES
  expect(() => {
    fizzBuzz(-3);
  }).toThrow(`please enter a positive number`);
});

// Bad input path
test('Should convert number strings to numbers eg ("20") to 20', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = fizzBuzz("20")
  console.log("should turn to 20 and return Buzz", result);
  expect(result).toBe("Buzz");
});

