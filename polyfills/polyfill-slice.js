Array.prototype.wrap = function () {
  let arr = this;
  const handler = {
    get(arr, prop) {
      return arr.at(prop);
    },
  };
  return new Proxy(arr, handler);
};

Array.prototype.slice = function (start, end) {
  let wrappedArray = this.wrap();
  let outputArr = [];
  if (start >= end) {
    return [];
  } 
  else if(start > 0 && end <= 0 || start > 0)
  for (let i = start; i < end; i++) {
    outputArr.push(wrappedArray[i]);
  }

  if (end > this.length) {
    outputArr.length = this.length - start;
  }
  return outputArr;
};

console.log([1, 2, 3, 4].slice(-1, 7));
