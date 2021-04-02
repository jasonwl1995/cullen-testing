function leapYear(year){
  if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
      console.log("true");
      return "true";
  } else {
      console.log("false");
      return "false";
  }
}

module.exports = leapYear;