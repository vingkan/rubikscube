function solve(){
	solveCross();
	outStream("Psych. Solve feature currently in development.");
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
		var f = 2; //Work with Up/Front Edge Part
		//Remove when recreating loop
		edgeFace = borders[f];
		edgeColor = cube.findCenter(edgeFace).getLabel(edgeFace).color;
		alert(edgeColor);
		targetPart = cube.findByColors('edge', [centerColor, edgeColor]);
		targetColorFace = targetPart.getFaceByColor(centerColor);
			console.log("Target Color is on the " + targetColorFace + " face.");
		edgeColorFace = targetPart.getFaceByColor(edgeColor);
			console.log("Edge Color is on the " + edgeColorFace + " face.");
		if(edgeColorFace == borders[f]){
			while(targetPart.getFaceByColor(centerColor) != face){
					console.log("Target color is on " + targetPart.getFaceByColor(centerColor) + " and needs to be on " + face + ".");
				rotate(borders[f], true);
			}
		}
	//}

}