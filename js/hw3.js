// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// A light switch that can be either on or off.
// A user's email address.
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// A list of student names from our class.
// A list of student names from our class, each with a location.
// A list of student names from our class, each with a location and each with a list of favorite tv sh

// light switch = boolean  light switch === "true"
// email address = string email: "sammintz1993@gmail.com"
// space ship = array spaceShip = ["hull", "laser blasters", "tractor beam",  "warp drive".]
// student name = array  studentNames = ["Sam", "Charlie", "Chelsea", "Frank"]
//student name with location = objects in an array  //

 const students  = [{
	name: "Sam",
	location: "Chicago"
}, {
	name: "Charlie",
	location: "Chicago "
},{
	name: "Chelsea",
	location: "Indianapolis"
}]


// 

// name with class location and tv shop = objects in an array

const student = [
{name: "Sam", location: "Chicago", favoriteTv: "The Offce"},
{name: "Charlie", location: "Chicago", favoriteTv: "The Wire"},
{name: "Chelea", location: "Indianapolis", favoriteTv: "Friends"} 

];


const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

rainbow[4]

const sam = {
	favoriteFood: "Lobster",
	hobby: "Biking",
	location: "Chicago",
	favoriteData: "Object"
}

console.log(sam.hobby)


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
// Change the value of limbo to null.

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null

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

const bondTitles = [];

// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.




for(let i = 0; i <= bondFilms.length; i++) { 		
	console.log(bondTitles.push(bondFilms[i].title));  // this gives me  a new array with all 23 movies 

// Create a new array oddBonds, of only the Bond films released on odd-numbered years.
		

const oddBonds = [];		
	
for(let i =  0; i <= bondFilms.length; i++) {
	if(bondFilms[i].year % 2 == 1) {
	console.log(oddBonds.push(bondFilms[i].year)); // this gives me a new array with 16 odd numbered years
}

}

// Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.


const totalCumulative = []

for(let i = 0; i <= bondFilms.length; i++) {
	console.log((bondFilms[i].gross))  // before making an array. 
}


for(let i = 0; i <= bondFilms.length; i++) {
	console.log(totalCumulative.push(bondFilms[i].gross))  // Moved gross into an array
}

Number.parseInt(bondFilms[i].gross, [10]) // stuck here 


