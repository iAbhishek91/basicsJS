// java script is written in unicode-16
// hence each character are saved as 2 byte

// convert a unicode to character:
// for every character you write this is internally
// converted, then it is applied to character encoding
console.log(
  String.fromCharCode(2437, 2495, 2477, 2503, 2487, 2453),
  ' ',
  String.fromCharCode(2438, 2480,),
  ' ',
  String.fromCharCode(2497, 2488, 2463, 2494, 2474, 2494),
);
// convert a character to unicode:
const char = 'A'.toString(16);
console.log(char);