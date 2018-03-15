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

































