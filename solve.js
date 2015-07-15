function solve(){
	outStream("Psych. Solve feature currently in development.");
}

function solveCross(){
	var face = 'up';
	var centerColor = cube.findCenter(face).color;
	var borders = cube.getBorders(face);
	//UP: borders = ['back', 'right', 'front', 'left'];
	var edgeFace = '';
	var edgeColor = '';
	var targetPart = null;
	var targetColorFace = null;
	var edgeColorFace = null;
	for(var f = 0; f < borders.length; f++){
		edgeFace = borders[f];
		edgeColor = cube.findCenter(edgeFace).color;
		targetPart = cube.findByColors('edge', [centerColor, edgeColor]);
		targetColorFace = targetPart.getFaceByColor(centerColor);
		edgeColorFace = targetPart.getFaceByColor(edgeColor);
	}

}