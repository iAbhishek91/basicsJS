console.log(' ----- OBJECT LITERAL ----- ');

var abhishek = {
  firstName: 'abhi',
  surname: 'das',
  address: {
    flatName: 'pioneer point',
    street: '11th Main St.',
  }
};

// accessing properties of objects
console.log('// accessing properties of objects');
console.log('// ----------------------------');

console.log(abhishek.firstName);
console.log(abhishek['address']['street']);

// adding properties to objects
console.log('// adding properties to objects');
console.log('// ----------------------------');

abhishek.skills = ['java', 'js', 'react', 'oracle'];
console.log(abhishek);

// delete properties to objects
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
console.log('// delete properties to objects');
console.log('// ----------------------------');

delete abhishek.skills;
console.log(abhishek);

// assigning object literal value to another object
console.log('// assigning properties to objects literal');
console.log('// ----------------------------');

const a = '1';
const b = '2';
const c = '3';
const d = '4'; 

const random = Math.random();

// there are multiple way of assignment
const newObj = {
  a,                // option-1: directly assign (new in es6)
  bNew: b,          // option-2: change the name while assignment
  [random]: c,      // option-3: dynamic name assignment
  'my-rule': d,     // option-4: another version of option-4
};
console.log(newObj);