function identity<T>(arg:T):T {
  return arg;
}

let num = identity(2628);
let str = identity("Hi");

// console.log(typeof num); // number
// console.log(typeof str); // string

class Queue<T> {
  protected data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

let q = new Queue<number>();

q.push(1);
q.push(2);
q.push(3);
q.push(4);

console.log(q);

console.log(q.pop().toPrecision());
console.log(q.pop().toPrecision()); // toPrecision is not a function
console.log(q.pop().toPrecision());
console.log(q.pop().toPrecision());