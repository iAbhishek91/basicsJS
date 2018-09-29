/* 
  logical oerator 
  these are special operator in javascript.
  - three logical operator available: 
    * && (logical AND),
    * || (logical OR), 
    * ! (logical NOT)
  - they mainly works with boolean values
*/

/* 
  TRUTHY: are values which can be converted to TRUE 
  1, 'any string', {}, [], Infinity
*/

/* 
  FALSY: are values which can be converted to FALSE 
  0, +0, -0, '', null, undefined, NaN
*/

console.log(' ----- LOGICAL OPERATOR ----- ');
console.log('// && (logical AND)');

const firstName = 'Abhishek';
const secondName = 'Das';


// only if firstName AND SecondName are TRUTHY
// then the last portion is executed.

// this can be replaced If scenario
(
  (firstName && secondName) && (
    a = 10, b =20,
    console.log(`result of : ${a} + ${b} = ${a+b}`)
  )
);

console.log('// || (logical OR)');

const firstName1 = 'Abhishek';
const secondName1 = '';


// only if firstName OR SecondName are TRUTHY
// then the last portion is executed.

// this can be replaced If scenario
(
  (firstName1 && secondName1) || (
    a = 30, b =20,
    console.log(`result of : ${a} + ${b} = ${a+b}`)
  )
);

// this can be replaced Switch case scenario
const switchCase = (function (key){
  console.log(key);
  return {
    red:(
      // some work
      a=10
    ),
    green:(
      // some work
      a=20
    ),
    blue:(
      // some work
      a=30
    )
  }[key];
}('green'));
console.log(`Scenario-1 switch case (complex): ${switchCase}`);

const color = {
  a:10,
  b:20,
  c:30,
}['a'];

console.log(`Scenario-2 switch case (simple): ${color}`);


const a1 =11;
const b1 = 8;

(b1<10 && a1>10) && (
  b2 = 'sarath',
  console.log(`abhishek: ${a1} ${b2}`)
)

const a2 = (function(key){
  return {
    red:(
      name = "sarath"
    ),
    blue: (
      name = "abhishek"
    )
  }[key]
}('blue'));
console.log(a2);
