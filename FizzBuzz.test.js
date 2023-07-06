

const validateFizzBuzz = require('./FizzBuzz.js');
describe('FizzBuzz', () => {
 // 3
 test('Return "Fizz" when it is divisible by 3', () => {
   expect(validateFizzBuzz(24)).toBe("Fizz");
   expect(validateFizzBuzz(18)).toBe("Fizz");
 });


 // 5
 test('Return "Buzz" when it is divisible by 5', () => {
   expect(validateFizzBuzz(35)).toBe("Buzz");
   expect(validateFizzBuzz(70)).toBe("Buzz");
 });


 //  3 && 5
 test('Return "FizzBuzz" when it is divisible by 3 and 5', () => {
   expect(validateFizzBuzz(60)).toBe("FizzBuzz");
   // expect(validateFizzBuzz(75)).toBe("Buzz");
 });


// not 3 neither 5
 test("Return a number as a string when it isn't divisible by 3 and 5", () => {
   expect(validateFizzBuzz(16)).toBe("16");
    expect(validateFizzBuzz(34)).toBe("34");
 });


 // < 0 || >100
 test("Return the message when the entered number is negative or more than 100", () => {
   expect(validateFizzBuzz(125)).toBe('The number should be more than zero and less or iqual to 100. Enter a valid number.');
 });
});
