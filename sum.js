function sum(num1, num2) {
  if (num1 === undefined || num2 === undefined) {
    throw new Error("You're missing an argument")
  }
  // return (num1 * 1) + (num2 * 1);
  return Number(num1) + Number(num2);
}
module.exports = sum;

  // sum = num1 + num2;
