
// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:
// //#1
// A light switch that can be either on or off.
Datatypes Boolean
const lightSwitch = true
if( )



// A list of student names from our class.

const students = {
	name: ['Alexis', 'Alyssa', 'Ben', 'Hanna', 'Irwin', 'James', 'Jim', 'Marie', 'Sam', 'Samat', 'Tyler', 'Zoe']
	console.log(students)
}
// A list of student names from our class, each with a location.
const students = [
	{ name: "Alexis", location: "Chicago" },
	{ name: "Alyssa", location: "Chicago"},
	{ name: "Ben", location: "Chicago" },
	{ name: "Hanna", location: "Chicago"},
	{ name: "Irwin", location: "Chicago" },
	{ name: "James", location: "Chicago"},
	{ name: "Jim", location: "Chicago"}
	{name: "Sam", location: "Chicago"},
	{ name: "Samat", location: "Chicago"},
	{ name: "Tyler", location: "Chicago"},
	{ name: "Zoe", location: "Chicago"}
];
	// or 
	const students = {
	name: ['Alexis', 'Alyssa', 'Ben', 'Hanna', 'Irwin', 'James', 'Jim', 'Marie', 'Sam', 'Samat', 'Tyler', 'Zoe'],
	location: "Chicago"
}
concole.log(students[1])

// A list of student names from our class, each with a location and each with a list of favorite tv shows.

const students = [
	{ name: "Alexis", location: "Chicago", tvShows: "comedy" },
	{ name: "Alyssa", location: "Chicago", tvShows: "action" },
	{ name: "Ben", location: "Chicago", tvShows: "comedy" },
	{ name: "Hanna", location: "Chicago", tvShows: "suspense" },
	{ name: "Irwin", location: "Chicago", tvShows: "mistery" },
	{ name: "James", location: "Chicago", tvShows: "drama" },
	{ name: "Jim", location: "Chicago", tvShows: "mistery" }
	{name: "Sam", location: "Chicago", tvShows: "action" },
	{ name: "Samat", location: "Chicago", tvShows: "comedy" },
	{ name: "Tyler", location: "Chicago",tvShows: "drama" },
	{ name: "Zoe", location: "Chicago", tvShows: "comedy" }
];




// A user's email address.
const email = []
console.log(email)






// A spaceship with a hull, laser blasters, tractor beam, and warp drive.



// Make an array that holds all of the colors of the rainbow.
const rainbow = ["Red", "Orange", "indigo", "Blue", "yellow", "green"];
console.log(rainbow)

// Write code that will access "blue" from the rainbow array.
rainbow[3]
//this is what i did in the console
const rainbow = ["Red", "Orange", "indigo", "Blue", "yellow", "green"];
console.log(rainbow)
VM44318:2 (6) ["Red", "Orange", "indigo", "Blue", "yellow", "green"]
undefined
rainbow[3]
"Blue"


// Make an object that is called your name and holds the information about your favorite food, 
//a hobby, the name of the town that you live in currently, and your favorite datatype.
// Write code that will access your hobby from the object that you just created.

const noemi = {
	favoriteFood: 'Italian',
	hobby: 'volunteering',
	town: 'Chicago',
	datatype: "object"
};
	console.log(noemi.datatype)
//I checked if it was right and it printed 'object'
console.log(noemi.hobby + noemi.datatype)
// this printed 'volunteeringobject'
console.log(noemi.hobby + ' ' + noemi.datatype)
// i got it right 'volunteering object'













//Change the value of limbo to null.


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
UPDATE table SET limbo = NULL




//Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.



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
  bondTitles = bondFilms.titles
];


//Console log the single movie object that contains the actor who starred in the least number of films.

//I am really sorry I don't get this



















