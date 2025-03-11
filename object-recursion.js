function resultantObj(obj, str) {
  for (a of Object.entries(obj)) {
    if (a[0] == str) {
      return a[1];
    } else if (typeof a[1] == "object") {
      return resultantObj(a[1], str);
    } else {
      throw new Error("key not found");
    }
  }
}

let obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
};
try {
  let strarr = "a.b.c.e".split(".");

  console.log(resultantObj(obj, strarr[strarr.length - 1]));
} catch (err) {
  console.log("Error: " + err.message);
}
