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
