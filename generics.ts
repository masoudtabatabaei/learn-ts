function fun<gen>(item:gen):gen {
  return item;
}

let first = fun<string>("Test name");
let second = fun<number>(12345);

// console.log(first , ` => is ${typeof first}`);
// console.log(second , ` => is ${typeof second}`);

//--------------------------------------------------------------------

function fun1<T , U , Y>(a:T , b:U , c:Y):T {
  return a;
}

let result = fun1("masoud" , 123 , true);

// console.log(result);

class CustomArray<T> {
  private arr:T[] = [];

  getItems() {
    return this.arr;
  }

  addItem(item:T) {
    return this.arr.push(item);
  }

  removeItem(item:T) {
    let index = this.arr.indexOf(item);
    if (index > -1) {
      return this.arr.splice(index , 1);
    }
  }
}

let customArray = new CustomArray<number | string>();

customArray.addItem(1234);
customArray.addItem("Aaa");
customArray.addItem(9101112);

// customArray.removeItem("Aaa");

// console.log(customArray.getItems());
// console.log(customArray);

//---------------------------------------------------------------
interface funcArgs {
  length: number;
}

function getLength<T extends funcArgs>(args: T) : number {
  return args.length;
}

console.log(getLength("masoudsdfsdfdsf"));
console.log(getLength({ length: 5, name: 'Hello'}));
// console.log(getLength(true));

// -------------------------------------------------------------------------

class Person {
  firstName: string;
  lastName: string;

  constructor(fname:string,  lname:string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

function display<T extends Person>(pers:T): void {
  console.log(pers.firstName + " " + pers.lastName);
}

console.log(display({firstName:"mas" , lastName:"oud"}))
console.log(display(new Person("Masoud" , "Tabatabaei")));