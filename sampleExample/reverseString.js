const name = 'Sator Arepo Tenet Opera Rotas';

console.log(name.split('').reverse().join(''));

// recursive function
console.log(name.substring(0, name.length -1));

let reverse = '';

function reverseString (string) {
  // appending the last string on the revese variable
  reverse = reverse + string.charAt(string.length-1);

  // end condition
  if (string.length < 1) {
    return reverse;
  }

  // recursive call with one digit less
  return reverseString(string.substring(0, string.length -1));
}

 console.log(reverseString(name));