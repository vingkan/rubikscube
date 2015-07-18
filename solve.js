function solve(){
	outStream("Start solution sequence.\n---");
	solveCross();
	outStream("---\nPsych. Solve feature currently in development.");
}

function solveCross(){
	var face = 'up';
	var centerColor = cube.findCenter(face).getLabel(face).color;
	var borders = cube.getBorders(face);
	//UP: borders = ['back', 'right', 'front', 'left'];
	var oppositeFace = '';
	var edgeFace = '';
	var edgeColor = '';
	var targetPart = null;
	var targetColorFace = null;
	var edgeColorFace = null;
	for(var f = 0; f < borders.length; f++){
		//var f = 1; //Work with Up/right Edge Part
		//Remove when recreating loop
		oppositeFace = cube.getOppositeFace(face);
		edgeFace = borders[f];
		edgeColor = cube.findCenter(edgeFace).getLabel(edgeFace).color;
console.log("BEGIN\nSearching for the " + centerColor + " with the " + edgeColor + " edge.");
		targetPart = cube.findByColors('edge', [centerColor, edgeColor]);
		targetColorFace = targetPart.getFaceByColor(centerColor);
			//console.log("Target Color is on the " + targetColorFace + " face.");
		edgeColorFace = targetPart.getFaceByColor(edgeColor);
			//console.log("Edge Color is on the " + edgeColorFace + " face.");
		//Begin Manipulation
		while(!(targetPart.hasLabels([face, edgeFace], 1))){
			if(targetPart.hasLabels([oppositeFace], 1)){
				rotate(oppositeFace, true);
			}
			else{
				var edgeSlot = cube.findEdge(face, edgeFace);
				//Need to do a better job of finding edgeSlot
				var shareFace = targetPart.getFaceByColor(edgeColor);
				while(!(edgeSlot.hasLabels([shareFace], 1))){
					rotate(face, true);
				}
				while(!(targetPart.getFaceByColor(centerColor) == face)){
					rotate(shareFace, true);
				}
			}
		}

		var positionedFace = '';
		if(targetPart.hasLabels([face], 1)){
			positionedFace = face;
		}
		else if(targetPart.hasLabels([edgeFace], 1)){
			positionedFace = edgeFace;
		}

		console.log(positionedFace + " = positionedFace")

		while(!(targetPart.hasLabels([face, edgeFace], 2))){
			rotate(positionedFace, true);
		}
		if(targetPart.getLabel(face).color != centerColor){
			flipEdge(face, edgeFace);
		}

	} //End of Loop
	//Check edges
	var correctFaces = 0;
	for(var b = 0; b < borders.length; b++){
		var faceCorrect = (cube.findEdge(face, borders[b]).getLabel(face).color == centerColor);
		var edgeCorrect = (cube.findEdge(face, borders[b]).getLabel(borders[b]).color == cube.findCenter(borders[b]).getLabel(borders[b]).color);
console.log(cube.findEdge(face, borders[b]).getLabel(borders[b]).color + '==' + cube.findCenter(borders[b]).getLabel(borders[b]).color)
		if(faceCorrect && edgeCorrect){
			correctFaces++;
		}
		else{
console.log('faceCorrect: ' + faceCorrect + ', edgeCorrect: ' + edgeCorrect);
		}
	}
console.log("CORRECT FACES: " + correctFaces + "\n");
}

/*
* Algorithm I: Flip a reversed edge part in the correct position to match correctly to the boundary centers
* 3D Specifications: Target face in the up position, Edge face in the right position
* Repeat Note: This algorithm is only called once at a time
* var targetFace (string): the target face
* var edgeFace (string): the edge face
*/
function flipEdge(targetFace, edgeFace){
	//runCommands(["Ri", "U", "Fi", "Ui"]);
	var borders = cube.getBorders(targetFace);
	var orientedUp = targetFace;
	var orientedRight = edgeFace;
	var edgeFaceIndex = 0;
	for(var b = 0; b < borders.length; b++){
		if(borders[b] == edgeFace){
			edgeFaceIndex = b;
			break;
		}
	}
	if(edgeFaceIndex == (borders.length - 1)){
		edgeFaceIndex = 0;
	}
	else{
		edgeFaceIndex += 1;
	}
	var orientedFront = borders[edgeFaceIndex];
	rotate(orientedRight, false);
	rotate(orientedUp, true);
	rotate(orientedFront, false);
	rotate(orientedUp, false);

}