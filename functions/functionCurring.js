// function currying is creating new function by,
// defaulting some parameter to the function

// this is mostly useful in mathematical based app

function add (a , b) {
  return a + b;
};

// addTwo is a curried function
const addTwo = add.bind(this, 2);
console.log(addTwo(10));

// addFive is a curried function
const addFive = add.bind(this, 5);
console.log(addFive(10));