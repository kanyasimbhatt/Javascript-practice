Promise.prototype.resolve = async function (promise) {
  try {
    let output = await promise;
    return output;
  } catch (err) {
    throw new Error(err);
  }
};

let promise = new Promise((resolve, reject) => {
  reject(1);
});

Promise.reject(promise)
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
