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

With the following object:

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





