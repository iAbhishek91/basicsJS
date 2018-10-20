const a = (firstName = 'Abhishek') => (lastName) => firstName + ' ' + lastName ;

console.log(a('Tom')('Verney'));