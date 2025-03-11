// let cart = ["pant", "skirt"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//     return showOrderSummary(paymentInfo);
//   })
//   .then(function (walletId) {
//     return updateWallet(walletId);
//   });

// function createOrder(cart) {
//   return new Promise(function (resolve, reject) {
//     resolve("12345");
//   });
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("upi: dfsdf@okhdfcbank and money: 2000/-");
//   });
// }

// function showOrderSummary(paymentInfo) {
//   return new Promise(function (resolve, reject) {
//     console.log(cart + " amount: " + 2000);
//     resolve("dfsdf@okhdfcbank");
//   });
// }

// function updateWallet(walletId) {
//   return new Promise(function (resolve, reject) {
//     resolve();
//   });
// }

//------------------------PROMISE APIs
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("P1 resolved"), 3000);
// });

// const p2 = new Promise(function (resolve, reject) {
//   //   setTimeout(() => resolve("P2 resolved"), 1000);
//   setTimeout(() => reject("P2 failed"), 1000);
// });

// const p3 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("P3 resolved"), 2000);
// });

// // Promise.all([p1, p2, p3]).then((res) => console.log(res));
// Promise.allSettled([p1, p2, p3]).then((res) => console.log(res));

//--------------------------------ASYN/AWAIT

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise1 resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise2 resolved");
  }, 10000);
});

async function handlePromise() {
  console.log("hello");
  const val = await p1;
  console.log("namadsda");
  console.log(val);

  const val2 = await p2;
  console.log("namadsda");
  console.log(val2);
}
handlePromise();

setTimeout(() => console.log("outside the function"), 1000);

//----------------------------------------------------------------------
async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}

async function async2() {
  console.log(3);
}

console.log(4);

setTimeout(function () {
  console.log(5);
}, 0);

async1();

new Promise(function (resolve) {
  console.log(6);
  resolve();
}).then(function () {
  console.log(7);
});

console.log(8);
