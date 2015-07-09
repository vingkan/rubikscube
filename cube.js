/*
* Constructor for Cube class
* Represents a Rubik's Cube
*/
function Cube(parts){
	this.parts = parts || [];
}

function addPart(part){
	this.parts.push(part);
}