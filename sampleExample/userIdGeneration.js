/* need to generate a userID for all the user
Conditions:
1. Function takes four parameter
first name as string, last name as string, pincode, and a Number N
2. short name and long name will be decided based on the length.
if the length is same then alphabetical order will be considered
3. take N position of pincode from right
4. reverse the case in the pin
*/

function generateUserId(firstName, lastName, pincode, N){
  let len = (''+pincode).length;
  return (getShortAndLongName(firstName, lastName)+ (''+pincode)[len-N]);
};

function getShortAndLongName(firstName, lastName){
  let shortName = '', longName = '';

  if(firstName.length === lastName.length){
    shortName = firstName > lastName ? lastName: firstName;
    longName = firstName > lastName ? firstName: lastName;
  } else {
    if(firstName.length > lastName.length) {
      shortName = lastName;
      longName = firstName;
    } else {
      shortName = firstName;
      longName = lastName;
    }
  }
  return `${shortName.charAt(0)}${longName}`;
}

console.log(generateUserId('abhishek', 'das', 700121, 2));