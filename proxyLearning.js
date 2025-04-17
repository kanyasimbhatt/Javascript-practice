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

/*
The Proxy object in JavaScript allows you to create a proxy for another object, 
enabling you to intercept and redefine fundamental operations for that object. 
This can be useful for logging property accesses, validating inputs, or even creating virtual properties.


target: The original object you want to proxy.

handler: An object that defines which operations will be intercepted and how to redefine them.

const target = { message1: "hello", message2: "everyone" };
const handler = {};
const proxy = new Proxy(target, handler);

console.log(proxy.message1); // hello
console.log(proxy.message2); // everyone


Customizing the Proxy

You can customize the proxy by defining functions on the handler object. These functions are called traps because they trap calls to the target object. For example:

const handler = {
get(target, prop, receiver) {
return "world";
}
};
const proxy = new Proxy(target, handler);

console.log(proxy.message1); // world
console.log(proxy.message2); // world
*/
