import { fizzBuzz } from "./fizzbuzz.js";

describe("Given a fizzBuzz function", () => {
  describe("When it receives an array with numbers from 1 to 15", () => {
    test("Then it should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizBuzz']", () => {
      const num1 = 1;
      const num2 = 15;
      const expectedResult = [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ];

      const expectedValue = fizzBuzz(num1, num2);

      expect(expectedValue).toStrictEqual(expectedResult);
    });
  });
  describe("When it receives NaN & NaN", () => {
    test("Then it should return []", () => {
      const num1 = NaN;
      const num2 = NaN;
      const expectedResult: any[] = [];

      const expectedValue = fizzBuzz(num1, num2);

      expect(expectedValue).toStrictEqual(expectedResult);
    });
  });
});
