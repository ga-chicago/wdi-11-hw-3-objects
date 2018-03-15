//Datatypes

//1 - I would use a boolean

//2 - I would use a string

//3 - I would use an object with a body property that had an array of the parts of the ship

//4 - I would use an array

//5 - I would use an array of objects each with a name property and a location property

//6 - I would use an array of objects each with a name, location, and tv show property. The tv shows would be in an array.

//1
const ligthSwitchOn = true;

//2
const email = "benscharb@gmail.com";

//3
const spaceship = {
	body: ['hull','laser blasters','tractor beam','warp drive']
};

//4, 5, and 6
const students = [
	{
		name: 'student 1',
		location: 'class',
		favoriteTVShows: ['Brooklyn 99','Flying Circus']
	},
	{
		name: 'student 2',
		location: 'home',
		favoriteTVShows: ['Lost','MASH']
	}
];

//Take it Easy

const rainbow = ['red','orange','yellow','green','blue','indigo','violet'];

console.log(rainbow[4]);

const Ben = {
	favoriteFood: 'stroganoff',
	hobby: 'biking',
	residence: 'Madison,WI',
	favoriteDatatype: typeof([])
};

console.log(Ben.hobby);