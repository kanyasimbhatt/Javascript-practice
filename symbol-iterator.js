//example
let obj = {
  name: "kanya",
  age: 100,
};
var val = false;
obj[Symbol.iterator] = function () {
  console.log("inside symbol iterator");
  return {
    next() {
      return { done: val, value: "hi" };
    },
  };
};

for (a of obj) {
  console.log(a);
  console.log("sdfdf");
  val = !val;
}

//actual implementation

let range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

//another implementation

let newobj = {
  val1: "heyy",
  val2: "namaste",
  val3: "hola",
  val4: "bonsoir",
};

newobj[Symbol.iterator] = function () {
  return {
    current: `val${num}`,
    end: `val4`,

    next() {
      if (this.current != this.end) {
        console.log(this.current);
        num++;
        console.log(this.current);
        return { done: false, value: newobj[this.current] };
      } else {
        return { done: true, value: "finished" };
      }
    },
  };
};
let num = 0;
for (let a of newobj) {
  console.log(a);
}
