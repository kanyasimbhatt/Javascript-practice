//You are given a function fetchDataFromAPI(url), which simulates fetching data from an API and returns a Promise.
// The function takes 2 seconds to resolve the data with a random number between 1 and 100. You need to create a function that
// fetches data from multiple APIs sequentially and returns the sum of all the data fetched.

// Simulated function (you don't need to implement it)
function fetchDataFromAPI(url) {
  return new Promise((resolve, reject) => {
    if (url === "2") {
      setTimeout(() => {
        const data = 10;
        reject(data);
      }, 2000); // Simulate 2-second fetch time
    } else {
      setTimeout(() => {
        const data = 5;
        resolve(data);
      }, 2000);
    }
  });
}

async function getSum(urlArray) {
  let sum = 0;

  for (a of urlArray) {
    try {
      let output = await fetchDataFromAPI(a);
      sum += output;
    } catch (err) {
      sum += err;
    }
  }
  return sum;
}
getSum(["1", "2", "3"]).then((data) => console.log(data));
