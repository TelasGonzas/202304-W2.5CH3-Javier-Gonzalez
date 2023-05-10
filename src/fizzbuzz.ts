export function fizzBuzz(start: number, end: number) {
  let fizzBuzzList: any[] = [];
  for (let num = start; num <= end; num++) {
    fizzBuzzList.push(num);

    if (num % 5 === 0) {
      fizzBuzzList.pop();
      fizzBuzzList.push("Buzz");
    }
    if (num % 3 === 0) {
      fizzBuzzList.pop();
      fizzBuzzList.push("Fizz");
    }
    if (num % 3 === 0 && num % 5 === 0) {
      fizzBuzzList.pop();
      fizzBuzzList.push("FizzBuzz");
    }
  }
  return fizzBuzzList;
}
