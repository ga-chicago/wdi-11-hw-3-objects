//For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
	// object, boolean

const lightSwitch = {
	on: true,
	off: false
}

// A user's email address.
	// object, string

const user = {
	email: 'email@email.com'
}

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
	// object, string, number, boolean

const spaceship = {
	hull: {
		type: 'aluminum',
		damaged: false
	},
	laserBlaster: {
		color: 'green',
		powerRating: 1000
	}
}

// A list of student names from our class.
	//object, string, array

const students = ['Sam', 'Alyssa', 'Noemi', 'MJ']

// A list of student names from our class, each with a location.
	//object, string

const students = {
	Sam: 'Chicago',
	Alyssa: "Italy",
	Noemi: 'Canada',
	MJ: 'Springfield'
}

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
	//Object

const students = {
	Sam: {
		location: 'Chicago',
		tvShows: ['Chicago Fire', 'Chicago PD']
	},
	Alyssa: {
		location: 'Italy',
		tvShows: ['American Dad', "South Park"]
	}
}

//////

Take it Easy

// Make an array that holds all of the colors of the rainbow.
const rainbowArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// Write code that will access "blue" from the rainbow array.
console.log(rainbowArray[4])

// Make an object that is called your name and holds the information about your favorite food, 
// a hobby, the name of the town that you live in currently, and your favorite datatype.

const Irwin = {
	food: 'lasagna',
	hobby: 'biking',
	town: 'Chicago',
	dataType: 'arrays'
}

// Write code that will access your hobby from the object that you just created.
 console.log(Irwin.hobby)


// Object-ception

//With the following object:

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

//Change the value of limbo to null.

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = 'null'


// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

var bondTitles = []

for (var i = 0; i < bondFilms.length; i++) {
	// bondFilms[i].title
	bondTitles.push(bondFilms[i].title)
}

console.log(bondTitles);

//Create a new array oddBonds, of only the Bond films released on odd-numbered years.

var oddBonds = []

const isOdd = (num) => {
	 return num % 2 != 0
}

for (var i = 0; i < bondFilms.length; i++) {
	if (isOdd(bondFilms[i].year)) {
		oddBonds.push(bondFilms[i])		
	}
}
console.log(oddBonds);






