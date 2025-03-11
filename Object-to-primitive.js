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

let user2 = {
  name: "sdfsdfg",
  gender: "female",
};
let new_user = {
  name: "dfsdfssf",
  [user2]: "sddddddd",
  [user]: "sdfsfsd",
};

// console.log(new_user[user2]);

//default hint

// if(!({i:10} == 1)){
//     console.log("inside");
// }
//-------------------------------------------------------------------

console.log(user);
console.log(+user);
console.log(user + 50);

//--------------------------------------------------------------------------

// let user1 = {
//   name: "John",
//   age: 30,
//   [Symbol.toPrimitive](hint) {
//     if (hint == "string") return this.toString();
//     else return this.valueOf();
//   },
//   toString() {
//     let str = "";
//     for (let [key, value] of Object.entries(this)) {
//       str += `${key}: ${value}\n`;
//     }
//     return str;
//   },

//   valueOf() {
//     return this.age;
//   },
// };

// alert(user1);

// {name: "John", age: 30}
