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

//  // const students  = [{
// 	name: "Sam",
// 	location: "Chicago"
// }, {
// 	name: "Charlie",
// 	location: "Chicago "
// },{
// 	name: "Chelsea",
// 	location: "Indianapolis"
// }]


// 

// name with class location and tv shop = objects in an array

// const student = [
// {name: "Sam", location: "Chicago", favoriteTv: "The Offce"},
// {name: "Charlie", location: "Chicago", favoriteTv: "The Wire"},
// {name: "Chelea", location: "Indianapolis", favoriteTv: "Friends"} 

// ];


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
