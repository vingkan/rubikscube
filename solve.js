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
	for(var f = 0; f < borders.length; f++){
		//var f = 1; //Work with Up/right Edge Part
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
		//Move target part to either the center face or the edge face
		if(targetPart.getLabel(face) == 'blank' || targetPart.getLabel(edgeFace) == 'blank'){
			while(targetPart.getLabel(face) == 'blank'){
					console.log("Target is not on either active face: " + face + " or " + edgeFace + ".");
				rotate(targetPart.getFaceByColor(centerColor), true);
			}
		}
		//Rotate part into position: simple
		if(targetPart.getFaceByColor(edgeColor) == borders[f]){
			while(targetPart.getFaceByColor(centerColor) != face){
					console.log("Simple Position: Target color is on " + targetPart.getFaceByColor(centerColor) + " and needs to be on " + face + ".");
				rotate(borders[f], true);
			}
		}
		//Rotate part into flipped position and then run algorithm
		else{
			var broken = false;
			var counter = 0;
			while(targetPart.getFaceByColor(centerColor) != edgeFace){
					console.log("Simple Flipping: Target color is on " + targetPart.getFaceByColor(centerColor) + " and needs to be on " + edgeFace + ".");
				rotate(face, true);
				counter++;
				if(counter == 4){
					broken = true;
					break;
				}
			}
			if(broken){
				console.log("We fucked up.");
				break;
			}
			while(targetPart.getFaceByColor(centerColor) != face){
				console.log("Flipping Algorithm: Target color is on " + targetPart.getFaceByColor(centerColor) + " and needs to be on " + face + ".");
				runCommands(["Ri", "U", "Fi", "Ui"]);
			}
		}
		console.log("Placed the " + centerColor + " with the " + edgeColor + " edge.\nEND");
		alert("PAUSE");
	}

}

/*
*
*/
function flipEdge(){
	var face = 'up';

}