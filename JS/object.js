/*
DataTypes


1.Boolean


const light = {
	type: 'light swith',
	On: false
}

2. string

const person = {
	name:'John',
	email: 'example@email.com'
}


3.array


const vehicle = {
	type: "space ship",
	features: ['heull', 'laser blasters', 'tractor beam', 'warp drive']

}


4.array

const class = {
	class: 'General A'
	type: 'WDI',
	students:['MJ','Sam', 'Tyler', 'Zoe']
}

5.object


const class = {
	class: 'General A'
	type: 'WDI',
	students:[{name: 'MJ', address: '123 Wacker'},{name:'Zoe', address: '123 drive'},{name:'Tyler', address:'123 example ST'}]
}



6.array



const class = {
	class: 'General A'
	type: 'WDI',
	students:[{name: 'MJ', address: '123 Wacker',shows:['seinfeld', 'grays anatomy','Shark Tank']},{name:'Zoe', address: '123 drive',shows:['seinfeld', 'grays anatomy','Shark Tank']},{name:'Tyler', address:'123 example ST',shows:['seinfeld', 'grays anatomy','Shark Tank']}]
}


*/



//Take it Easy


//1. 


const rainbow = ['red','orange','yellow','blue','purple'];


//2.


rainbow[3];

//3.

const myself = {
	favorite food: 'Lobster',
	hobby: 'jiu jitsu',
	town:'burbank',
	datatype: 'objects'
}

//4.

myself.hobby;
//or
myself['hobby'];


//Object-ception

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



//Bond Films


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

//1.

const bondTitles = [];

for(let i = 0; i < bondFilms.length; i ++){
	bondTitles.push(bondFilms[i].title);
}

console.log(bondTitles);


//2.

const oddBonds = [];

for (let i = 0; i < bondFilms.length; i ++){
	if(bondFilms[i].year % 2 !== 0){
		oddBonds.push(bondFilms[i].title);
	}
}


console.log(oddBonds);


//3.


let sumOfGross = 0;

for (let i = 0; i < bondFilms.length; i ++){
	let newGross = bondFilms[i].gross.replace('$','');
	sumOfGross += parseInt(bondFilms[i].newGross)

}

console.log(sumOfGross);







//Digging Deeper

//1

const actorsList = [];


for(let i = 0; i < bondFilms.length; i ++){
	actorsList.push(bondFilms[i].actor);
	
}



































