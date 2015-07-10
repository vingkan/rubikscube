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
* Returns array of all parts with a non-blank label on the given face
* var face (string): the face to select
*/
Cube.prototype.getFace = function(face){
	var partsArray = [];
	for(var i = 0; i < this.parts.length; i++){
		if(this.parts[i].getLabel(face).color != 'blank'){
			partsArray.push(this.parts[i]);
		}
	}
	return partsArray;
}

Cube.prototype.organizeFace = function(face){
	var partsArray = this.getFace(face);
	var borders = this.getBorders(face);
	var faceArray = [];
		faceArray.push(this.findCorner(partsArray, borders[0], borders[3])); //TOP LEFT
		faceArray.push(this.findEdge(partsArray, borders[0])); //TOP MIDDLE
		faceArray.push(this.findCorner(partsArray, borders[0], borders[1])); //TOP RIGHT
		faceArray.push(this.findEdge(partsArray, borders[3])); //LEFT MIDDLE
		faceArray.push(this.findCenter(partsArray)); //CENTER
		faceArray.push(this.findEdge(partsArray, borders[1])); //RIGHT MIDDLE
		faceArray.push(this.findCorner(partsArray, borders[3], borders[2])); //BOTTOM LEFT
		faceArray.push(this.findEdge(partsArray, borders[2])); //BOTTOM MIDDLE
		faceArray.push(this.findCorner(partsArray, borders[1], borders[2])); //BOTTOM RIGHT
	return faceArray;
}

Cube.prototype.getBorders = function(face){
	var borders = [];
	switch(face){
		case 'up':
			borders = ['back', 'right', 'front', 'left'];
			break;
		case 'down':
			borders = ['front', 'right', 'back', 'left'];
			break;
		case 'front':
			borders = ['up', 'right', 'down', 'left'];
			break;
		case 'back':
			borders = ['down', 'right', 'up', 'left'];
			break;
		case 'left':
			borders = ['back', 'up', 'front', 'down'];
			break;
		case 'right':
			borders = ['back', 'down', 'front', 'up'];
			break;
		default:
			alert('Invalid Face.');
			break;
	}
	return borders;
}

Cube.prototype.findCenter = function(partsArray){
	var target = null;
	for(var i = 0; i < partsArray.length; i++){
		if(partsArray[i].type == 'center'){
			target = partsArray[i];
		}
	}
	//CATCH ERROR
	if(target == null){
		console.log("Could not find Center part.");
	}
	return target;
}

Cube.prototype.findEdge = function(partsArray, edgeFace){
	var target = null;
	for(var i = 0; i < partsArray.length; i++){
		if(partsArray[i].type == 'edge' && partsArray[i].getLabel(edgeFace).color != 'blank'){
			target = partsArray[i];
		}
	}
	//CATCH ERROR
	if(target == null){
		console.log("Could not find Edge part with " + edgeFace + ".");
	}
	return target;
}

Cube.prototype.findCorner = function(partsArray, cornerFace1, cornerFace2){
	var target = null;
	for(var i = 0; i < partsArray.length; i++){
		if(partsArray[i].type == 'corner' && partsArray[i].getLabel(cornerFace1).color != 'blank' && partsArray[i].getLabel(cornerFace2).color != 'blank'){
			target = partsArray[i];
		}
	}
	//CATCH ERROR
	if(target == null){
		console.log("Could not find Corner part.");
	}
	return target;
}

/*
* Basic method to rotate a face of a cube with respect to basic directions
* var face (string): the face to be rotated
* var clockwise (boolean): rotate face clockwise, counter-clockwise if false
*/
Cube.prototype.rotate = function(face, clockwise){
	var faceArray = this.getFace(face);
	for(var i = 0; i < faceArray.length; i++){
		this.parts[i].rotate(face, clockwise);
	}
}

/*
* Outputs cube labels to HTML visualizer
*/
Cube.prototype.draw = function(){
	var faces = ["up", "down", "front", "back", "left", "right"];
	for(var i = 0; i < faces.length; i++){
		this.drawFace(faces[i]);
	}
}

/*
* Collects all parts with non-blank labels on a given face and draws them on HTML visualizer
* var face (string): face to draw
*/
Cube.prototype.drawFace = function(face){
	var faceDiv = document.getElementById('face-' + face);
		faceDiv.innerHTML = "";
	var faceParts = this.organizeFace(face);
	for(var i = 0; i < faceParts.length; i++){
		faceDiv.innerHTML += faceParts[i].getLabel(face).toHTML(faceParts[i].type);
	}
}