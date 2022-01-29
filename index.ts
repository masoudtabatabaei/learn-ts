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



let person : {
  name: string ,
  age: number ,
  role: [string , number]
} = {
  name : "masoud" ,
  age : 30 ,
  role : ["author" , 4]
};

console.log(person.role);

enum Role {ADMIN  , AUTHOR , OPERATOR};
console.log(Role.AUTHOR);


type combNumberString = number | string;
type justTwoValue = "as-text" | "as-number";

function concatenate(input1: combNumberString , input2: combNumberString , resultConversion: justTwoValue) {
  if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    return +input1 + +input2;
  } else {
    return input1.toString() + " " + input2.toString();
  }
}


console.log(concatenate(2,8 , "as-number"));
console.log(concatenate("salam" , "masoud" , "as-text"));
console.log(concatenate(2 , "numbers" , "as-text"));


function voidFuncType(input:number):void {
  console.log("value is: " + input);
}

function undefinedFunc(input: number) :undefined {
  console.log("value is: " + input);
  return;
}

voidFuncType(100);
undefinedFunc(200);

// ----------------------------------------------------------------------


function add2 (num1:number , num2:number , cf: (n:number) => number ) {
  let result = +num1 + +num2;
  cf(result);
  return result;
}

function cfFunction(n) {
  return n;
}

let combineValues: number;
combineValues = add2(1,3 , cfFunction(80));

console.log(combineValues);