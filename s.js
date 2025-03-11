let user = {
  name: "sdfsfs",
  age: 10,
  date: 28,

  [Symbol.toPrimitive](hint) {
    console.log(hint);
    return hint === "number" ? this.value() : this.String();
  },

  String() {
    console.log("tostring");
    return this.name;
  },
  value() {
    console.log("valueof");
    return this.date;
  },
};

let new_user = {
  name: "dfsdfssf",
  [user]: "dgdfgfdg",
};

console.log(user);
console.log(+user);
console.log(user + 50);

//

let obj = {
  a: 10,
  b: 20,
  c: 30,
};

for (let a of Object.keys(obj)) {
  Object.defineProperty(obj, a, { enumerable: false });
}

console.log(obj["a"]);

for (let a of Object.entries(obj)) {
  console.log(a);
}

//ACCESSING negative indexes using proxy
function wrap(arr) {
  const handler = {
    get(arr, prop) {
      return arr.at(prop);
    },
  };
  return new Proxy(arr, handler);
}

let arr = [1, 2, 3];

let new_arr = wrap(arr);

console.log(new_arr[0]);
