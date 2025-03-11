//fibonacci
let fibonacciArr = [];

function calculateFibonacci(n) {
  fibonacciArr[0] = 0;
  if (n == 1) {
    return fibonacciArr;
  }
  fibonacciArr[1] = 1;
  if (n == 2) {
    return fibonacciArr;
  }

  for (let i = 2; i <= n; i++) {
    fibonacciArr[i] = fibonacciArr[i - 1] + fibonacciArr[i - 2];
  }

  return fibonacciArr;
}

let n = 10;
console.log(...calculateFibonacci(n));

//palindrome

let input = "cake";

function checkPalindrome(input) {
  if (input.length == 1) return true;

  for (let i = 0; i < Math.floor(input.length / 2); i++) {
    if (input[i] != input[input.length - i - 1]) return false;
  }
  return true;
}

console.log(checkPalindrome(input));

//check prime number
let number = 2952;

function checkPrimeNumber(number) {
  if (number == 2) return true;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) return false;
  }
  return true;
}

console.log(checkPrimeNumber(number));

//sum of digits

function sumOfDigits(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

console.log(sumOfDigits(10, 3, 9));

//Reverse the string

function reverseString(str2) {
  let str1 = "";
  for (let i = str2.length - 1; i >= 0; i--) {
    str1 += str2[i];
  }

  return str1;
}

console.log(reverseString("kanya"));

//findMissingNumber

let arr = [1, 2, 4, 5, 6, 8];

function findMissingNumber(arr) {
  let missing = [];
  if (arr[0] != 1) missing.push(1);
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      missing.push(arr[i] + 1);
    }
  }
  return missing;
}

console.log(findMissingNumber(arr));

//Anagram check

function AnagramCheck(str1, str2) {
  return str1.split("").sort().join("") == str2.split("").sort().join("")
    ? 1
    : 0;
}

console.log(Boolean(AnagramCheck("kanya", "yanka")));
