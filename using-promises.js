doSomething()
.then((result) => doSomething(result))
.then((newResult) => doThirdThing(newResult))
.then((finalResult) => console.log(`Got the final result: ${finalResult}`))
.catch(failureCallback);


// Nesting
doSomethingCritical()
.then ((response) =>
    doSomethingOptional(response)
    .then((optionalResponse) => doSomethingExtraNice(optionalResponse))
    .catch((e) => {}),
).then (() => moreCriticalStuff())
 .catch((e) => console.log(`Critical failure: ${e.message}`));