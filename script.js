function createRubiksCube(){
	var labelColors = ['orange', 'red', 'green', 'blue', 'yellow', 'white'];
	var parts = [];
	//Create center pieces
		parts.push(new Part('orange', null, null, null, null, null, false));
		parts.push(new Part(null, 'red', null, null, null, null, false));
		parts.push(new Part(null, null, 'green', null, null, null, false));
		parts.push(new Part(null, null, null, 'blue', null, null, false));
		parts.push(new Part(null, null, null, null, 'yellow', null, false));
		parts.push(new Part(null, null, null, null, null, 'white', false));
	//Create edge pieces
		new Part(up, down, front, back, left, right, false)
	/*var cube = new Cube({
		new Part(up, down, front, back, left, right, false),
	});*/
}