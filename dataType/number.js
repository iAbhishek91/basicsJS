/* 
IEEE 754 outlines the basic standards 
and computational algos to work with numbers or floating point numbers.

In a scientific representation of any number, a number has a sign(+/-),
a mantissa and an exponent. For e.g.

A base 10 number 1.234 in scientific representation can be written as 1234 
* 10^-3, where 1234 is a mantissa/significand and 10^-3 is the exponent. 

| sign bit | exponent | mantissa |
 where,
  sign bit = 0 | 1
  exponent = -127 to +128
  mantissa = 24 bits of significand value

So a NaN value according to the definition(all exponent set to 1 
and at least one fraction bit set) can be represented as:
| 0 | 1111111 | 00...01
or
| 0 | 1111111 | 10...00  

Tip: Exponent value -127 and +128 are used for reserved category, NaN is +128.

Binary to decimal:
So for example, converting a Binary to Decimal number would be:

Decimal Digit Value	256	128	64	32	16	8	4	2	1
Binary Digit Value	 1	 0	1	  1	  0	  0	1	0	1
 
By adding together ALL the decimal number values from right to left
at the positions that are represented by a “1” gives us:  
(256) + (64) + (32) + (4) + (1) = 35710.

Hence, 1111111 = 256 + 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1
*/

// console.log(maxNum); // 1.1111111111111112e+308
let maxNum = 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111;

// console.log(minNum); // -1.1111111111111112e+308
let minNum = -111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111;

/* special: +0 -0 

The IEEE 754 standard for floating point arithmetic 
(presently used by most computers and programming languages 
that support floating point numbers) requires both +0 and −0.
The zeroes can be considered as a variant of the extended real
number line such that 1/−0 = −∞ and 1/+0 = +∞

Practical example would be: sorting a column
-0 >> descending
0 >> ascending
*/
// console.log(+0); //0
// console.log(-0); //-0

//test of -0
// function isMinusZero(value) {
//   return 1/value === -Infinity;
// }
// isMinusZero(0); // false
// isMinusZero(-0); // true

// console.log(5/0); //Infinity
// console.log(5/-0); //-Infinity

// console.log(+0 === -0); //true
// console.log(Infinity === -Infinity); //false
// console.log(Object.is(+0,-0));//false

//Infinity/NaN is a value property - they dont have any attribute or method associated
//typeof Infinity/NaN is a number
let infinity = Infinity;
let nan = NaN;

// operation with these value property
// console.log(nan + nan); //NaN
// console.log(infinity + nan); //NaN
// console.log(infinity + infinity); //Infinity

// console.log(nan - nan); //NaN
// console.log(infinity - nan); //NaN
// console.log(infinity - infinity); //NaN

// console.log(nan * nan); //NaN
// console.log(infinity * nan); //NaN
// console.log(infinity * infinity); //Infinity

// console.log(nan / nan); //NaN
// console.log(infinity / nan); //NaN
// console.log(infinity / infinity); //NaN

// any operation with NaN with number is NaN
// console.log(5 / nan);

// console.log(5 / infinity); // 0
// console.log(5 * infinity); // + and * Infinity
// console.log(5 - infinity); // -Infinity

/* conversion
convert to string */
// only in case of addition number is convertated to string
// console.log(0.35 + '0.34'); //0.350.34

// in this scenario string is convertated to number
// console.log(0.35 - '0.34'); // 0.0099999999999999953

// in this scenario string is convertated to number
// console.log(10 * '20'); // 200

// in this scenario string is convertated to number
// console.log(4 / '3'); // 1.33333333333333

/* conversion
convert to boolean */

// console.log(23 | 1);

// ------------------------------
console.log('math function');

console.log(Math.round(-23.19));