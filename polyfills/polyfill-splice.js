Array.prototype.splice = function (start, count, ...args) {
  let inputArr = this;
  let outputArr = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (i < start) {
      outputArr.push(inputArr[i]);
    } else if (i >= start + count) {
      if (args.length === 0) {
        outputArr.push(inputArr[i]);
      } else {
        outputArr.push(...args);
        outputArr.push(inputArr[i]);
        args = [];
      }
    }
  }
  for (let i = 0; i < outputArr.length; i++) {
    this[i] = outputArr[i];
  }
  this.length = outputArr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 7, 8);
console.log(arr);
