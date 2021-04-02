const leapYear = require('./leapYear.js');

test('number that is divisible by 4 and not by 100 should return true', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = leapYear(40);
  console.log("divisible by 4", result);
  expect(result).toEqual("true");
});


test('number that is divisible by 4 AND divisible by 100 should return false', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = leapYear(1900)
  console.log("divisible by 100", result);
  expect(result).toThrow("false");
});

test('number that is divisible by 400 should return true', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = leapYear(1600)
  console.log("divisible by 5", result);
  expect(result).toThrow("true");
});


test('negative number', () => {
  // THIS IS WHERE TEST CODE GOES
  expect(() => {
    leapYear(-3);
  }).toThrow(`please enter a positive number`);
});

test('number that does not meet critria should return false', () => {
  // THIS IS WHERE TEST CODE GOES
  const result = leapYear(1333)
  console.log("not divisible by 4 and 100 or 400", result);
  expect(result).toThrow("false");
});

// // Bad input path
// test('Should convert number strings to numbers eg ("20") to 20', () => {
//   // THIS IS WHERE TEST CODE GOES
//   const result = leapYear("20")
//   console.log("should turn to 20 and return true", result);
//   expect(result).toBe("true");
// });

