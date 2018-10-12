var a = 2;

console.log(a);

// a is a closure to function closurea
function closurea () {
  console.log(a);
}

closurea.call(this);