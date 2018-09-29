console.log(' ----- DESTRUCTING -----');
/* idea of desctructuring is to 
pull out new variables and rename 
variables out of object and array */

console.log('// destructing object');

let a = {
  firstName: 'abhi',
  lastname: 'das',
  address: {
    area: {
      zone: 'zone-4',
      name: 'Illford',
    },
    city: 'London',
  }
};

// nested object destructuring
// creating new variables
let { firstName, address: {area: { zone}} } = a;

console.log(firstName, zone);

// renaming the variables.

let { address: { area: { name : locality } }} = a;
console.log(locality);

// destructing array
console.log('// destructing array');

const demoArr = [1, 2, 3, 4, 5];
const [one, two, three] = demoArr;
// const {one, two, three} = demoArr; // this is worng

console.log( one, two, three);

