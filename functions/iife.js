// immidiately invoked function expression

/* this is also known as safe code */

(function(){
  this.a = 10;
  this.b = 20;
  console.log(this);
}());

console.log(a);