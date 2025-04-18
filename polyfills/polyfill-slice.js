Array.prototype.slice = function (start, end) {
  let outputArr = [];
  if (start < 0) {
    start = this.length + start;
  } else if (end < 0) {
    end = this.length + end;
  }

  if (start > end) {
    return [];
  }

  for (let i = start; i < end; i++) {
    outputArr.push(this[i]);
  }
  return outputArr;
};

console.log([1, 2, 3, 4, 5, 6].slice(2, -2));
