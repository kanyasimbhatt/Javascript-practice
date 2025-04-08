String.prototype.toUpperCase = function () {
  let str = this;

  let strArr = str.split("");

  strArr = strArr.map((char) => {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      char = String.fromCharCode(char.charCodeAt(0) - 32);
    }
    return char;
  });

  return strArr.join("");
};

console.log("helLoP+++".toUpperCase());
