// this is taken from redux
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

// the right most function can take any number of arguments.
// but the later ones should have only one argument because the return, 
// value of right function is input for this function
// the input function should return a value with will be consumed by the 
// function left to it

// REAL WORLD APPLICATION:
// help you to write deeply nested function,
// where right function is giving input to left
// and number of argument can be only one
function addTwo ( a ) { return a * 2 }
function addThree ( a ) { return a + 3 }

const composeFunction = compose(addTwo,addThree);
// THINK: output will be 23 or 26
console.log(composeFunction(10));// 

// rough - under the hood
const combineFunction = a => addTwo(addThree(a));
console.log(combineFunction(10));