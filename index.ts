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


function concatenate(input1: number|string , input2: number|string) {
  if(typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + " " + input2.toString();
  }
}


console.log(concatenate(2,8));
console.log(concatenate("salam" , "masoud"));
console.log(concatenate(2 , "numbers"));