const string = 'Sator Arepo Tenet Opera Rotas'; 
// madam
// tenet
// Sator Arepo Tenet Opera Rotas


// using built in function
( string.split('').reverse().join('').toLowerCase() === string.toLowerCase() &&
  (console.log(`${string}: is an pallindrome`))
);

// pallindrome ignoring the space
console.log(' ----- pallindrome ignoring the space ----- ');
const greekPallindrome = 'ΝΙΨΟΝ ΑΝΟΜΗΜΑΤΑ ΜΗ ΜΟΝΑΝ ΟΨΙΝ';

(
  greekPallindrome
    .split(' ')
    .join('')
    .split('')
    .reverse()
    .join('') === greekPallindrome.split(' ').join('') && (
      console.log(`${greekPallindrome}: is an pallindrome`)
    )
)