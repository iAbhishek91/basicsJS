// function borrowing is a concept where one ,
// object can utilize methods of another object.

const abhi = {
  firstName: 'Abhishek',
  lastName: 'Das',
  displayName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  },
};

const sutapa = {
  firstName: 'Sutapa',
  lastName: 'Chattaraj',
};

const malpa = {};

abhi.displayName(); //Abhishek Das
abhi.displayName.call(sutapa); // Sutapa Chattaraj
abhi.displayName.call(malpa); // undefined undefined