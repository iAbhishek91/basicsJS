let objA = {
  firstName:'abhishek',
  lastName:'das',
  age:28,
  address: 'London'
};

let objB = {
  firstName:'Bob',
  lastName:'Verney',
  age:30,
  address: 'London'
};

const { firstName, notFoundAttr, ...rest } = objA;

console.log(rest);
console.log(notFoundAttr);
