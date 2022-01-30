interface Named {
  name: string;
}

interface Greeting extends Named {
  greet(phrase: string): void;
}

class Person implements Greeting {
  name: string;

  constructor(name:string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user = new Person("Mahya");
console.log(user.greet("Hi "));

interface Addfn {
  (n: number , y:number): number
}

let addFn:Addfn;
addFn = (n , y) => {
  return n + y;
};

console.log(addFn(2,5));