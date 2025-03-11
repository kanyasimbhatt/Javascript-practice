function maxsub(input) {
  let maxarr = [];
  for (let i = 0; i < input.length; i++) {
    let sum = 0;
    let max = 0;
    for (let j = i; j < input.length; j++) {
      sum += input[j];
      if (sum > max) {
        max = sum;
      }
    }

    maxarr.push(max);
  }

  let maxval = maxarr[0];
  for (let a of maxarr) {
    if (maxval < a) {
      maxval = a;
    }
  }

  return maxval;
}

console.log(maxsub([1, 2, 3]));
