/*
* Constructor for Cube class
* Represents a Rubik's Cube
*/
function Cube(parts){
	this.parts = parts || [];
}

/*
* Adds part to cube
* var part (part): part with labels
*/
Cube.prototype.addPart = function(part){
	this.parts.push(part);
}

/*
* Basic method to rotate a face of a cube with respect to basic directions
* var face (string): the face to be rotated
* var clockwise (boolean): rotate face clockwise, counter-clockwise if false
*/
Cube.prototype.rotate = function(face, clockwise){
	for(var i = 0; i < this.parts.length; i++){
		if(this.parts[i].getLabel(face).color != 'blank'){
			this.parts[i].rotate(face, clockwise);
		}
	}
}