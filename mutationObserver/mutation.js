window.onload = () => {
  setTimeout(() => {
    const divele = document.createElement("div");
    divele.id = "my-element";
    divele.innerText = "This is new div";
    document.body.append(divele);

    const divele2 = document.createElement("div");
    divele2.id = "my-element2";
    divele2.innerText = "This is new div2";
    document.body.append(divele2);

    const divele3 = document.createElement("div");
    divele3.id = "my-element3";
    divele3.innerText = "This is new div3";
    document.body.append(divele3);
  }, 1000);
};

function waitForElement(id) {
  return new Promise(function (resolve, reject) {
    let flag = false;
    let observer = new MutationObserver((e) => {
      flag = true;
      for (let a of e) {
        if (a.addedNodes[0].id === id) {
          resolve(a);
        }
      }
      reject("Element not Found.");
    });
    observer.observe(document.body, {
      childList: true,
    });

    setTimeout(() => {
      if (!flag) {
        reject("Element not Found.");
      }
    }, 3000);
  });
}

waitForElement("my-element3")
  .then((el) => {
    console.log("Element found!", el);
  })
  .catch((err) => {
    console.error(err);
  });

//a.addedNodes.length, a.removedNodes.length
//a.firstElementChild.textContent
//when some text content is changed that element is remove and a new element with the new specified text content is added, a.removedNodes[0].NodeValue(old value), a.addedNodes[0].NodeValue
//works for both innerHTML and textContent, exception - in innerHTML = "<br>sdfsfdf" then 2 nodes are added.
