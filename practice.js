/////// JAVASCRIPT PRACTICE 

// Use the instruments object to print the following.

// "telecastor"
// "santa cruz"
// "washburn"
// "weber"

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecastor", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

console.log(instruments.guitar.electric[1])
console.log(instruments.guitar.acoustic[2])
console.log(instruments.banjo[2])
console.log(instruments.mandolin[1])

// Using the instruments object loop through all the electric gutiars and print them to the console.

// console.log(instruments.guitar.electric)

for (let i = 0; i < instruments.guitar.electric.length; i++) {
	console.log(instruments.guitar.electric[i])
}


// Add a property to the instruments object, that includes a list of your favourite singers.

instruments.singer = ['Green Day' , 'My Chemical Romance']



////	ANOTHER PRACTICE //////


const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}


// Using crazy object print the following

// "omg my mouth is burning"

crazyObject.taco[1].salsa[5]

// "Pretty pretty prettayyyyy good"

crazyObject.larry.quotes[0]

// "Swearing at Larry and Jeff"

crazyObject.larry.characters[2].favourtieHobby

// "Chicken Teriyaki Boyyyyyy"

crazyObject.larry.nicknames[1]

// "The object the contains the name funkhauser"

crazyObject.larry.characters[1].name


// Print all the values in the object that has the name of susie
// (i.e "susie", "jeffs wife", and "Swearing at Larry and Jeff" should be printed to the console)

for (let prop in crazyObject.larry.characters[2]){
	console.log(crazyObject.larry.characters[2][prop]);
}

// Print all of Larrys quotes using a loop

for (let i = 0; i < crazyObject.larry.quotes.length; i++) {
	console.log(crazyObject.larry.quotes[i])
}

// create and object using dot notation with five properties


const myCar = new Object();
	myCar.make = 'Chevrolet';
	myCar.model = 'Malibu';
	myCar.year: 2017;
	myCar.color: 'Gray';
	myCar.condition: 'New';
}

const myCar = {};
	myCar['make']= 'Chevrolet';
	myCar['model']= 'Malibu';
	myCar['year']= 2017
	myCar['color']: 'Gray';
	myCar.['condition']: 'New'







