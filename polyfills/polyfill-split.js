String.prototype.split = function (separator) {
  let outputArr = [];

  if (!this.includes(separator)) {
    return [`${this}`];
  } else if (separator === "") {
    for (let i = 0; i < this.length; i++) {
      outputArr.push(this[i]);
    }
    return outputArr;
  }
  let splitString = "";
  for (let i = 0; i < this.length; i++) {
    let notFoundFlag = false;
    for (let j = 0; j < separator.length; j++) {
      if (this[i + j] !== separator[j]) {
        notFoundFlag = true;
        break;
      }
    }

    if (!notFoundFlag) {
      outputArr.push(splitString);
      splitString = "";
      i += separator.length - 1;
      if (i === this.length - 1) {
        outputArr.push("");
      }
    } else {
      splitString += this[i];
      if (i === this.length - 1) {
        outputArr.push(splitString);
      }
    }
  }

  return outputArr;
};

console.log("the house the park the".split("the"));
