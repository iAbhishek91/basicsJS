/* all about objects
 >> __proto__ and prototype
 >> new and function constructor
 >> object and object.create(implement using new keyword)
 >> super class
 >> sub class
 >> inheritance (etends)
 >> object.prototype.constructor
 >> object.prototype.assign
 >> object.prototype.keys
 >> object.prototype.values
 >> object.prototype.seal
 >> object.prototype.freeze
*/


// what is __proto__ ?
// __proto__ defines a object from where a object is created .
// every object has __proto__ and then that __proto__ has another __proto__ .
// this is known as prototype chain in objects .
// __proto__ can be repointed, however it strongly discourged

// example of __proto__
// global scope
const globalThis = this;// fresh assignment .
console.log(globalThis); //{} __proto__: Object {__defineGetter__, __defineSetter__, __lookupGetter__}

// inner scope
const firstObj = {
  prop: 'prop-1',
  displayThis: function() {
    console.log(this);
  }
}
firstObj.displayThis(); // {displayThis; function(), prop:'prop-1'} __proto__: Object {__defineGetter__, __defineSetter__, __lookupGetter__}

// nested scope
const nestedObj = {
  prop1: 'prop-1',
  nestedObj : {
    prop2: 'prop-1-1',
    displayThis: function() {
      console.log(this);
      // console.log(prop1); // error prop1 is not defined
      // console.log(this.prop1); // undefined as prop1 is not present on this.
    }
  },
};
nestedObj.nestedObj.displayThis(); // {displayThis; function(), prop:'prop-1-1'} __proto__: Object {__defineGetter__, __defineSetter__, __lookupGetter__}
// nested object do not have __proto__ as outer object, instead it is global
// ie this is not inheritance
//------------------------------------------------------------------
console.log('//----------------Classical Inheritance using New()-----------------------');


// what is prototype?
// prototype is an attribute(obj) each function has !
// incase of function constructor every object created from that function constructor ,
// will have __proto__ assigned to prototype object .
// we can repoint prototype .


// first way to create object
// FUNCTION CONSTRUCTOR
function Hello (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // note: best practice is to keep all the method under prototype .
  // in this scenario the method is availabe with in the function ,
  // hence everytime a object is created will have a different instant of this method ,
  // eating up more memory .
  this.sayHello = function () {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  }
};

// we are adding a another method to Hello function,
// but not on the main function, instead on prototype attribute .
/* under the hood: this line will execute first and will by default ,
prototype is a Object {constructor: function Hello(firstName, lastName),__proto__} .
When the below line is executed sayHelloFromPrototype is appended to the object ,
and look like this Object {constructor: function Hello(firstName, lastName), sayHelloFromPrototype: function (), __proto__} */
Hello.prototype.sayHelloFromPrototype = function() {
  console.log('hello from prototype, ', this.firstName + ' ' + this.lastName);
}
const helloAbhishek = new Hello('Abhishek', 'Das');
const helloSutapa = new Hello('Sutapa', 'Chattaraj');

// note this is not prototypal inheritance as Hello is not prototype of helloAbhishek object
console.log(helloAbhishek);/* helloAbhishek{firstName:'Abhishek', lastName:'Das', sayhello:function()}*/

 helloAbhishek.sayHello();
 helloAbhishek.sayHelloFromPrototype();
 helloSutapa.sayHello();
 helloSutapa.sayHelloFromPrototype();

 //------------------------------------------------------------------
console.log('//----------------Object.create and Implementation------------------------');
// second way to create object
// Object.create

// what is Object.create is a function which takes an object and ,
// returns a empty object whose __proto__ points to object passed.
const helloObj = {
  firstName: '',
  lastName: '',
  sayHello: function () {
    console.log('Hello, ', this.firstName, this.lastName);
  },
};

const helloObjAbhishek = Object.create(helloObj);
const helloObjSutapa = Object.create(helloObj);

// note this is prototypal inheritance as helloObjAbhishek's prototype is helloObj
// Object.create creates a blank object and point the passed object as __proto__ chain
console.log(helloObjSutapa); // {} with __proto__ as helloObj

// below we are adding two properties to the blank object create above
// after below lines are executed helloObjAbhishek will have firstName and lastName
// also its prototype
helloObjAbhishek.firstName = 'Abhishek';
helloObjAbhishek.lastName = 'Das';

// sayHello is excuted on helloObjAbhishek
// hence this points to helloObjAbhishek and not global object
// so this.firstName = 'Abhishek', if it not found it would have searched in the prototype chain
helloObjAbhishek.sayHello();


// what exactly object.create does???
// object.create uses new but repoints the object to its prototype
function myObjCreate(superObj) {
  function funcConstructor() {};
  // initial state of prototype object contains constructor and __proto__
  // then it is newly assigned to another object
  // now prototype contains firstName:"", lastName: "", sayHello: ""
  funcConstructor.prototype = superObj;
  return new funcConstructor();
};

// initialy helloMyObjCreateAbhishek is undefined and 
// myObjCreate() method is called
//
const helloMyObjCreateAbhishek = myObjCreate(helloObj);
console.log(helloMyObjCreateAbhishek);

//------------------------------------------------------------------
console.log('//----------------------STATIC OBJECT-----------------------------');
function HelloStaic (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // note: best practice is to keep all the method under prototype .
  // in this scenario the method is availabe with in the function ,
  // hence everytime a object is created will have a different instant of this method ,
  // eating up more memory .
  this.sayHello = function () {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  }
};

// adding static methods
HelloStaic.sayHelloStatic = function() {
  console.log('hello from static');
}
const objAbhiStaticExample = new HelloStaic('Abhishek', 'Das');
// objAbhiStaticExample.sayHelloStatic(); // this will throw error as static methods can be invoked from object
HelloStaic.sayHelloStatic();

//------------------------------------------------------------------
console.log('//----------------------INHERITANCE-------------------------------');
// expample from MDN

// this is function constructor and act as an super class
function Shape() {
  // variable a is defined in global varible of instead of local
  // as a is a property of this, and this points to global object at this point
  // this can be accessed from outide as it is global
  this.a=0;
  // variable b is defined in global varible of instead of local
  // as a is a property of this, and this points to global object at this point
  // this can be accessed from outide as it is global
  this.b=0;
  // variable c is defined in local scope
  // c can't be accessed from outide as it is local to Shape
  /* Note: on this: when an property or method is added in a function we it is in local scope and without
  inheritance other object cant access that. However if a attribute or method is added in this it will be accessed 
  by all the member who have access to that perticulat 'this'.*/
  const c = a + b;
}
// this is subClass which calls super class constructor
// what ever is initialized by the super class gets initialized for sub class scope
function Rectangle() {
  //console.log(this);// global variables of global.this but local.this ; closure: Shape, as this a variable use from outer scope, its own global variables same as global.this
  // in this case, calling with this and with means same as both the function point to same this,
  // refer: calling super class from different scope
  Shape.call(this);
}
Rectangle();

/*
// calling super class from different scope
const myObj = {
  firstName: 'Abhi',
  lastName: 'Das',
  displayName: function () {
    console.log('Hi!', this.firstName, this.lastName);
  },
  shape: function () {
    //Shape();// in this scenario a=0 and b=0 will be created on local and global scope, this is because Shape() function points to global by default.
    Shape.call(this);// in this scenario a=0 and b=0 is not created on global this, as scope of shape() function is not global
  }
};
myObj.shape();
*/

// extending super class
// we can extend the entire class; Rectangle.prototype = Object.create(new Shape());
// Rectangle.prototype = Object.create(new Shape());
// or the common method; Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype = Object.create(Shape.prototype);

// what is object.prototype.constructor?
// it is a operator and not a function, hence do not take any argument
// constructor returns a reference of the object constructor function which created this instance of the obj
// we can mutate the constructor reference. for eg Rectangle.prototype.constructor = Object.create(Rectangle);
// however, its not adviced to change the reference of the costructor, until really required
const tempObj1 = {};
const tempObj2 = {};
const tempObj3 = tempObj1;
const tempObj4 = Object.create(tempObj1);
const tempObj5 = new Hello();
const tempObj6 = new Hello();

console.log(tempObj1.constructor === Object); // true
console.log(tempObj2.constructor === Object); // true
console.log(tempObj1 === tempObj2); //false
console.log(tempObj1 === tempObj3); //true
console.log(tempObj1 === tempObj4); //false
console.log(tempObj5 === tempObj6); //false

// what is object.prototype.assign?
// this method takes two or more object target and sources
// the properties of target object are overridden from sources if availble
const objAssignEg1 = {
  a:11, b:21, c:31
};
const objAssignEg2 = {
  b:22, c:32, d:42
};
const objAssignEg3 = {
  c:33, d:43, e:53
};

const objAssignEg4 = Object.assign(objAssignEg1, objAssignEg2, objAssignEg3);
console.log(objAssignEg4); // a:11, b:22, c:33, d:43, e:53

// what is object.prototype.keys?
// keys returns a array of all the keys of an object
// takes only one object as arguments
const arrKeys = ['abhi', 'su'];
console.log(Object.keys(objAssignEg3));
console.log(Object.values(objAssignEg3));
console.log(Object.keys(arrKeys));
console.log(Object.values(arrKeys));

// object.seal   || object.isSeal(); not extable
// object.freeze || object.isFreeze(); not able to add prop or deleted property