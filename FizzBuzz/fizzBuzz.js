function fizzBuzz(i){
  for (let i = 1; i <= 50; i++ ){
    if (i % 15 === 0) {
        return 'FizzBuzz';
    } else if (i % 3 === 0) {
        return 'Fizz';
    } else if (i % 5 === 0) {
        return 'Buzz';
    // } else if (i <= 0) {
    //   throw new Error("please enter a positive number")
    } else {
        return i;
    }
  }
}

module.exports = fizzBuzz;