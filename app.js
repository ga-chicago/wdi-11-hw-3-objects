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








