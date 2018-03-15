
//ANSWER THE FOLLOWING
//For each of the following, write which datatypes you would use to represent the data,
//and then give a small example of the data structure:

//1. A light switch that can be either on or off.

//I would use a boolean:
lightOn = true;

//2. A user's email address.

//I would use a string to store a user's email address:
const email = "myemail@email.com";

//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.

// I would use an object to write this datatyp:
const spaceship = {
	hull: {}
	laser blasters: {}
	tractor beam: {}
	warp drive:{}
}

//4. A list of student names from our class.

//I would use an array:
const students = ["Alyssa", "Zoe", "Sam", ...]

//5. A list of student names from our class, each with a location.

// I would use objects:
const students = {
	alyssa: {
		location: "Chicago"
	},
	tyler: {
		location: "Illinois"
	},
	sam {
		location: "United States"
	}
}

//6. A list of student names from our class, each with a location and each with a list of favorite tv shows.

// I would use a combination of objects and arrays:
const students = [
	{ name: "Alyssa", location: "Chicago", tvShow: "Scandal"},
	{ name: "Marie", location: "Chicago", tvShow: " "},
	{ name: "Hannah", location: "Chicago", tvShow: " "}
]


//TAKE IT EASY
//1. Make an array that holds all of the colors of the rainbow.

const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

//2. Write code that will access "blue" from the rainbow array.

console.log(rainbow[4]);

//3. Make an object that is called your name and holds the information about your favorite food, a hobby, 
//the name of the town that you live in currently, and your favorite datatype.

const alyssaGraham = {
  favoriteFood: "tacos",
  hobby: "Ultimate Frisbee",
  home: "Chicago",
  favDatatype: "objects"
}

//4. Write code that will access your hobby from the object that you just created.

console.log(Alyssa.hobby);

