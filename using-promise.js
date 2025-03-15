// template for creating a function that returns a promise
function doSomething() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://example.com/");
      }, 200);
    });
}

// NB: Always put a return statement at the front of a promise function to avoid floating promises

// Wrong code
doSomething()
  .then((url) => {
    // Missing `return` keyword in front of fetch(url).
    fetch(url);
  })
  .then((result) => {
    // result is undefined, because nothing is returned from the previous
    // handler. There's no way to know the return value of the fetch()
    // call anymore, or whether it succeeded at all.
  });


// Correct code
doSomething()
.then((url) => {
// `return` keyword added
return fetch(url);
})
.then((result) => {
// result is a Response object
});

// race condition
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // Missing `return` keyword in front of fetch(url).
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will always be [], because the fetch request hasn't completed yet.
  });


// correct code
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // `return` keyword now included in front of fetch call.
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will now contain data from fetch call.
  });


// flattening the nested chain
doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });


// using async/await
async function logIngredients() {
    const url = await doSomething();
    const res = await fetch(url);
    const data = await res.json();
    listOfIngredients.push(data);
    console.log(listOfIngredients);
  }

// OR THIS
async function foo() {
    try {
      const result = await doSomething();
      const newResult = await doSomethingElse(result);
      const finalResult = await doThirdThing(newResult);
      console.log(`Got the final result: ${finalResult}`);
    } catch (error) {
      failureCallback(error);
    }
  }

  
// NESTING
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));


// the async/await version of the above code
async function main() {
    try {
      const result = await doSomethingCritical();
      try {
        const optionalResult = await doSomethingOptional(result);
        await doSomethingExtraNice(optionalResult);
      } catch (e) {
        // Ignore failures in optional steps and proceed.
      }
      await moreCriticalStuff();
    } catch (e) {
      console.error(`Critical failure: ${e.message}`);
    }
  }

// Composition tools
/* Promise.all()
 * Promise.allSettled() 
 * Promise.any()
 * Promise.race()
 */
