function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5; // 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
number1 = 8;
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
var person = {
    name: "masoud",
    age: 30,
    role: ["author", 4]
};
console.log(person.role);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["OPERATOR"] = 2] = "OPERATOR";
})(Role || (Role = {}));
;
console.log(Role.AUTHOR);
function concatenate(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + " " + input2.toString();
    }
}
console.log(concatenate(2, 8));
console.log(concatenate("salam", "masoud"));
console.log(concatenate(2, "numbers"));
