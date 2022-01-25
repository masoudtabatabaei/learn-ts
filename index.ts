function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase + n1 + n2);
  } else {
    return n1 + n2;
  }
}

let number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

number1 = 8;

const result = add(number1 , number2 , printResult , resultPhrase);
console.log(result);