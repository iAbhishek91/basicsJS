const fruits = ['apple', 'banana', 'orange', 'grape', 'strawbery'];
const appleIndex = fruits.indexOf('apple');
console.log(`index of apple is: ${appleIndex}`); //0

const spliceOneFruit = fruits.splice(appleIndex, 1);
console.log(`splice fruit array: ${spliceOneFruit}`); //apple

const sliceFruits = fruits.slice(appleIndex, 3);
console.log(`slice fruit array: ${sliceFruits}`); // apple, banana, orange
