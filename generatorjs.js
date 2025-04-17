function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

function* generatePasswordCodes() {
  yield* generateSequence(48, 57);

  yield* generateSequence(65, 90);

  yield* generateSequence(97, 122);
}

let str = "";
let codes = generatePasswordCodes();
for (value of codes) {
  str += String.fromCharCode(value);
}

console.log(str);

//---------------------------
/*

next = previous * 16807 % 2147483647*/

function* pseudoRandom(num) {
  while (true) {
    num = (num * 16807) % 2147483647;
    yield num;
  }
}

let generator = pseudoRandom(1);

console.log(generator.next()); // 16807
console.log(generator.next()); // 282475249
console.log(generator.next()); // 1622650073
