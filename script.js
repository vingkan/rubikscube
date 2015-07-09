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
		//Orange Face
		parts.push(new Part('orange', null, null, null, 'yellow', null, false));
		parts.push(new Part('orange', null, null, null, null, 'white', false));
		parts.push(new Part('orange', null, null, 'blue', null, null, false));
		parts.push(new Part('orange', null, 'green', null, null, null, false));
		//Red Face
		parts.push(new Part(null, 'red', null, 'green', null, null, false));
		parts.push(new Part(null, 'red', null, null, null, 'white', false));
		parts.push(new Part(null, 'red', null, null, 'yellow', null, false));
		parts.push(new Part(null, 'red', null, 'blue', null, null, false));
		//Green Face
		parts.push(new Part(null, null, 'green', null, 'yellow', null, false));
		parts.push(new Part('orange', null, 'green', null, null, null, false));
		parts.push(new Part(null, null, 'green', null, null, 'white', false));
		parts.push(new Part(null, 'red', 'green', null, null, null, false));
		//Blue Face
		parts.push(new Part('orange', null, null, 'blue', null, null, fsalse));
		parts.push(new Part(null, null, null, 'blue', 'yellow', null, false));
		parts.push(new Part(null, null, null, 'blue', null, 'white', false));
		parts.push(new Part(null, 'red', null, 'blue', null, null, false));
		//Yellow Face
		parts.push(new Part('orange', null, null, null, null, 'yellow', false));
		parts.push(new Part(null, null, null, null, 'blue', 'yellow', false));
		parts.push(new Part(null, 'red', null, null, null, 'yellow', false));
		parts.push(new Part(null, null, 'green', null, null, 'yellow', false));
		//White Face
		parts.push(new Part('orange', 'red', 'green', 'blue', 'yellow', 'white', false));
		parts.push(new Part(null, null, null, 'blue', null, 'white', false));
		parts.push(new Part(null, 'red', null, null, null, 'white', false));
		parts.push(new Part(null, null, 'green', null, null, 'white', false));
		parts.push(new Part('orange', null, null, null, null, 'white', false));
	//Create corner pieces
		//new Part(null, null, null, null, null, null, false)
	/*var cube = new Cube({
		new Part(up, down, front, back, left, right, false),
	});*/
}