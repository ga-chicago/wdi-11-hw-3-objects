// Datatypes

// #1 - boolean. 
lightOn = true 
lightOn = false

// #2 - string. 
"me@example.com"

// #3 - object 
const spaceship = {
	hull: metal;
	laserBlasters: true;
	tractorBeam: true;
	warpDrive: true;
}

// #4 - array
const students = ["Hannah", "Marie", "Alyssa"]

// #5 - array of objects
const class = [{
	name: "Hannah",
	location: "First Row"
}, {
	name: "Irwin", 
	location: "Second Row"
}, {
	name: "Zoe",
	location: "Third Row"
}]

// #6 - array of objects with an array of favorite shows
const class = [{
	name: "Hannah",
	location: "First Row",
	favoriteShows: ["How I Met Your Mother", "New Girl", "Agents of Shield"]
}, {
	name: "Irwin", 
	location: "Second Row"
	favoriteShows: ["Arrow", "This is Us", "WestWorld"]
}, {
	name: "Zoe",
	location: "Third Row"
	favoriteShows: ["WestWorld", "The Big Bang Theory", "Star Trek"]
}]

// Take it Easy

// #1 
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// #2
colors[4];

// #3
const Hannah = {
	favoriteFood: "tacos",
	hobby: "travel writing",
	currentTown: "Chicago",
	favoriteDatatype: "objects"
}

// #4
Hannah.hobby 

// Object-ception
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


inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null"


// Bond films

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

// bond titles

const bondTitles = [];

for (let i = 0; i < bondFilms.length; i++) {
	bondTitles.push(bondFilms[i].title);
	if (i === (bondFilms.length - 1)) {
		console.log(bondTitles);
	}
}

// oddBonds

const oddBonds = [];

for (let i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i].year % 2 != 0) {
		oddBonds.push(bondFilms[i].title);
	}
	if (i === (bondFilms.length - 1)) {
		console.log(oddBonds);
}
 
// bond gross
const grossArray = [];
let bondGross = 0

for (let i = 0; i < bondFilms.length; i++) {
	
	grossArray.push(bondFilms[i].gross.slice(1));
	bondGross += parseInt(grossArray[i]);
	console.log(bondGross)
	/*let bondGross = 0	for (let i = 0; i < bondFilms.length; i++) {
		bondGross += groassArray[i]
	}
	console.log(bondGross)*/ 
}

console.log(grossArray);

// I can't get rid of the commas. I don't know what I'm doing. I know how to do it once they're gone but I'm so tired. 

// humdinger

// the only one that won't have a match is george lazenby because he was only in one movie. so if I create an object of bond actors, I can iterate through that object. if it doesn't match any of the VALUES in that object

// FUTURE HANNAH - READ THIS: 
// you want to create the bondActor names as objects rather than as an array. once it is an object, you should be able to iterate over it and check for a match (copy logic from card game for check for match? )
// if there is a match, do nothing
// if there is not a match, print that line to the console. 

//none of the below works but I'm leaving it here in case future Hannah needs it to fix this garbage

const bondActors = {};

let uniqueBondActors = [];

for (let i = 0; i < bondFilms.length; i++ ) {
	let bondFilmsKeys = Object.keys(bondFilms[i])
	bondActors. // WANT TO CREATE THIS AS A NEW OBJECT WITHIN THE BOND ACTORS OBJECT PROBABLY

	push(bondFilms[i].actor) 
	uniqueBondActors = bondActors.reduce(function(a,b){
		if (a.indexOf(b) < 0) a.push(b);
		return a;
	}, []);
	console.log(uniqueBondActors, bondActors)
}






// 	bondActors.name[i] = bondFilms[i].actor; // this gives all of them timothy dalton. which doesn't work. 
// 	console.log(bondActors)
// }

// for (const actor in bondFilms) {
// 	if (bondFilms[i])
// }

// const actorCount = [];

// for (let i = 0; i < bondFilms.length; i++ ) {
// 	if (i = 0) {
// 		actorCount.push(bondFilms[i].actor);
// 	} else if (i > 0 && bondFilms[i].actor === actorCount[i-1] {

// 	})
// }

// measure frequency of actors
// if actor is equal to actor of the previous object, push count 1 for repeats
// if actor is not equal to actor of previous film, push actor object to new array

// if repeats = 1, print that original string


// iterate over object - if actor with least frequency is true, console.log that shit

