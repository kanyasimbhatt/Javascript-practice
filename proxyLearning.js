//ACCESSING negative indexes using proxy
function wrap(arr) {
  const handler = {
    get(arr, prop) {
      return arr.at(prop);
    },
  };
  return new Proxy(arr, handler);
}

let arr = [1, 2, 3];

let new_arr = wrap(arr);

console.log(new_arr[0]);
