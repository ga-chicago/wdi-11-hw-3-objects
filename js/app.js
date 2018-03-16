// DATATYPES

// 1
// boolean

let lightSwitch = true;
if (lightSwitch === true){
	lightSwitch = "on";
} else {
	lightSwitch = "off";
};

// 2
// string

const emailAddress = "tyler.a.earls@gmail.com";

// 3
// object

const spaceship = {
	hull: "steel",
	tractor beam: "online",
	warp drive: "engaged"
};

// 4
// array

const studentNames = ["Johnny", "Susie", "Janet", "Samantha"];

// 5
// array of objects

const studentNames2 = [{
	name: "Johnny",
	location: "Chicago"
}, {
	name: "Susie",
	location: "San Francisco"
}, {
	name: "Janet",
	location: "Seattle"
}, {
	name: "Samantha",
	location: "Madison"
}];

// 6 
// array of objects

const studentNames3 = [{
	name: "Johnny",
	location: "Chicago",
	favoriteTVShow: "Happy Days"
}, {
	name: "Susie",
	location: "San Francisco",
	favoriteTVShow: "Frasier"
}, {
	name: "Janet",
	location: "Seattle",
	favoriteTVShow: "Twin Peaks"
}, {
	name: "Samantha",
	location: "Madison",
	favoriteTVShow: "Star Trek"
}];

// TAKE IT EASY

// 1

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// 2

console.log(rainbowColors[4]);

// 3

const tylerEarls = {
	favoriteFood: "Indian Food",
	hobby: "Watching Star Trek",
	location: "Chicago",
	favoriteDataType: "objects"
};

// 4

console.log(tylerEarls.object);

// OBJECT-CEPTION

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

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// BOND FILMS

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

// create an empty array first in a let variable
let bondTitles = [];

for (let i = 0; i < bondFilms.length; i++){
  // iterate through the titles and store it in the array you already made
  bondTitles.push(bondFilms[i]["title"]);
};

console.log(bondTitles);

//ODD BONDS ARRAY

let oddBonds = [];

for (let i = 0; i < bondFilms.length; i++){
  if (bondFilms[i]["year"] % 2 === 1) {
    oddBonds.push(bondFilms[i])
  }
};

// TOTAL BONDS FILMS GROSS

// THIS WOULD HAVE WORKED IF THERE WEREN'T COMMAS IN THE GROSS VALUES
// let bondsGrossInt = function {
//   for (i = 0; i < bondFilms.length; i++){
//     while (bondFilms[i].gross.charAt(0) === '$'){
//       bondFilms[i].gross = bondFilms[i].gross.substr(1);
//     };
//   parseInt(bondFilms[i].gross);
//   }
// }  let removeGrossComma = [];

let usableGrossString = [];

for (let i = 0; i < bondFilms.length; i++){
  // removes $ sign at beginning of gross
  while (bondFilms[i].gross.charAt(0) === '$'){
    bondFilms[i].gross = bondFilms[i].gross.substr(1);
  }; 
  // removes commas from gross
  const commaFinder = /,/gi;
  usableGrossString.push(bondFilms[i].gross.replace(commaFinder, ''));
};

// at this point usableGrossString[] is an array
// of all the bondFilms.gross values as strings without $ or commas

let grossInt = [];

for (let i = 0; i < bondFilms.length; i++){
  if (typeof(usableGrossString === 'string')){
    grossInt.push(parseInt(usableGrossString[i]));  
  };
};

// at this point grossInt[] has all the bondFilms.gross 
// as integers in an array.
// i just need to add them.

// I have to assign the total a value of 0 so it has an integer value 
// and doesn't affect the sum value

let totalGross = 0;

for (let i = 0; i < bondFilms.length; i++){
  totalGross += grossInt[i];
};

console.log(totalGross);

// DIGGING DEEPER

// I somehow need to count the amount of times an actor appears
// I need to find the lowest actor count and select that object

// create object to store bondFilm.actor keys in
// creating a first key/value so it won't read as undefined in the console
const actorNames = {};

// add actor keys to bondActors object
for (let i = 0; i < bondFilms.length; i++){
  // console.log(bondFilms.actor);
  if (actorNames.hasOwnProperty(bondFilms[i].actor)){
    // if the loop has the property of an actor name
    actorNames[bondFilms[i].actor] += 1;
  } else {
    // if the loop hasn't defined a particular actor yet
    // for example, hasn't read "Sean Connery" yet
    // without this condition, the if condition would never pass
    actorNames[bondFilms[i].actor] = 1;
  }
  // have to use bracket notation for [bondFilms[i].actor] because it's a variable.
  // if we used dot notation, the code would look for a key called bondFilms[i].actor;
};
// now we have an object actorNames populated with each key as an actors name
// and the value being the amount of times they're in a film
// console.log(actorNames);
for (let i = 0; i < bondFilms.length; i++){
  if (actorNames[bondFilms[i].actor] === Math.min(...Object.values(actorNames[bondFilms[i].actor]))) { 
    console.log(bondFilms[i]);
  }
};
// create function to find the name of the actor who appeared in least amount of movies

const getLeastFrequentActor = (actorNames) => {
  // create array to store values of actorNames object populated earlier
  const frequencyArray = Object.values(actorNames);
  // frequencyArray = [3, 1, 4, 7, 6, 2]
  // then we want to find the minimum value in the array
  // store it in a variable min
  const min = Math.min(...frequencyArray);
  // iterate through actorNames object to check for which one
  // has the minimum value
  for (let prop in actorNames){
    if(actorNames[prop] === min){
      // console.log(prop, actorNames[prop]) <--- returns George Lazenby, 1
      return prop;
    }
  }
};
// now we have a function that returns the least frequent actor, George


// iterate through bondFilms and check for films with least frequent actor
for (let i = 0; i < bondFilms.length; i++) {
  // if the least frequent actor is the key, print that object on console
  if (getLeastFrequentActor(actorNames) === bondFilms[i]["actor"]){
    console.log(bondFilms[i]);
  };
};