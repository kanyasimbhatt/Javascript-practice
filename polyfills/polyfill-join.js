Array.prototype.join = function (separator) {
  let str = "";
  let inputArr = this;

  for (let i = 0; i < inputArr.length; i++) {
    str += inputArr[i];
    if (i != inputArr.length - 1) {
      str += separator;
    }
  }
  return str;
};

console.log([1, 2, 3, 4].join("pink"));
