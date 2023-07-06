function validationFizzBuzz(num) {
  if(num<=100 && num > 0){
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else{
      return num.toString();
    }
   
  }else{
    return 'The number should be more than zero and less or iqual to 100. Enter a valid number.';
  }
 }
 module.exports = validationFizzBuzz;