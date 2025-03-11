function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

// alert(curriedSum(1)(2)); // 3

//-------------------------------------------------------

const sum1 = (a) => (b) => typeof b === "undefined" ? a : sum1(a + b);

console.log(sum1(1)(2)(3)());
