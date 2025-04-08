String.prototype.toLowerCase = function () {
  let str = this;

  let newStrArr = str.split("");
  console.log(newStrArr);

  newStrArr = newStrArr.map((char) => {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 91) {
      char = String.fromCharCode(char.charCodeAt(0) + 32);
    }
    return char;
  });

  return newStrArr.join("");
};

console.log("heLLO+++".toLowerCase());
