/* idea of desctructuring is to 
pull out new variables and rename 
variables out of object and array */

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