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
	var edgeFace = '';
	var edgeColor = '';
	var targetPart = null;
	var targetColorFace = null;
	var edgeColorFace = null;
	//for(var f = 0; f < borders.length; f++){
		var f = 1; //Work with Up/right Edge Part
		//Remove when recreating loop
		edgeFace = borders[f];
		edgeColor = cube.findCenter(edgeFace).getLabel(edgeFace).color;
		console.log("BEGIN\nSearching for the " + centerColor + " with the " + edgeColor + " edge.");
		targetPart = cube.findByColors('edge', [centerColor, edgeColor]);
		targetColorFace = targetPart.getFaceByColor(centerColor);
			console.log("Target Color is on the " + targetColorFace + " face.");
		edgeColorFace = targetPart.getFaceByColor(edgeColor);
			console.log("Edge Color is on the " + edgeColorFace + " face.");
		//Begin Manipulation
		
	//} //End of Loop

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
	var orientedFront = borders[edgeFaceIndex + 1];
	rotate(orientedRight, false);
	rotate(orientedUp, true);
	rotate(orientedFront, false);
	rotate(orientedUp, false);

}