// standalone library
// similar library pattern like jQuery
;(function(){
  // data used in the library
  const capital = {
    bangladesh:	'Dhaka',
    china: 'Beijing',
    france: 'Paris',
    switzerland: 'Bern',
    uk: 'London',
    uae: 'Abu Dhabi',
    usa: 'Washington, D.C.',
    thailand: 'Bangkok',
    pakistan: 'Islamabad',
    india: 'New Delhi',
  };
  const continent = {
    asia: ['india', 'bangladesh', 'china', 'pakistan', 'thiland', 'uae'],
    europe: ['france', 'switzerland', 'uk'],
    america: {
      N: ['usa'],
    },
  };

  // this function returns an object
  // it helps library users to create objects without new keyword
  function Country(country){
    return new Country.init(country);
  }

  // defining all the methods in property of the above function
  Country.prototype = {
    getCapital: function () {
      return capital[this.country.toLowerCase()];
    },
    validate: function() {
      if (!capital.hasOwnProperty(this.country.toLowerCase())) {
        throw `unknown country ${this.country}`;
      }

      return this;
    },
    getContinent: function() {
       return continent.asia.indexOf(this.country.toLowerCase()) === -1
        ? continent.europe.indexOf(this.country.toLowerCase()) === -1
          ? continent.america.N.indexOf(this.country.toLowerCase()) === -1
            ? 'undefined country'
            : 'North America'
          : 'Europe'
        : 'Asia';
    },
    getCapitalChain: function() {
      console.log(`Capital of ${this.country}: ${this.getCapital()}`);
      return this;
    },
    getContinentChain: function() {
      console.log(`Continent of ${this.country}: ${this.getContinent()}`);
      return this;
    }
  };

  // defining the function constructor
  Country.init = function (country = 'india') {
    this.country = country;
  }

  Country.init.prototype = Country.prototype;

  this.Country = this.C$ = Country;
}());

// accessing the above library
//console.log(C$('china').getContinent());

// accessing the chain functionality of the library

C$('france')
  .validate()
  .getCapitalChain()
  .getContinentChain()



