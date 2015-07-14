function rotate(face, clockwise){
	cube.rotate(face, clockwise);
	cube.draw();
}

function inStream(){
	var inBox = document.getElementById('inBox');
	var text = inBox.value;
	var commands = [];
	var command = "";
	for(var i = 0; i < text.length; i++){
		if(text[i] != ' '){
			command += text[i];
		}
		else{
			commands.push(command);
			command = "";
		}
	}
	if(command != ' '){
			commands.push(command);
			command = "";
	}
	runCommands(commands);
	console.log(commands);
}

function runCommands(commands){
	var key = '';
	var face = '';
	var clockwise = true;
	for(var i = 0; i < commands.length; i++){
		key = commands[i].charAt(0).toLowerCase();
		console.log('Key: ' + key);
		face = selectFace(key);
		console.log('Face: ' + face);
		if(commands[i].length > 1 && commands[i].charAt(1) == 'i'){
			clockwise = false;
		}
		if(face != null){
			setTimeout(function(){rotate(face, clockwise)}, 500);
		}
		key = '';
		face = '';
		clockwise = true;
	}
}

function selectFace(key){
	var faces = ['up', 'down', 'front', 'back', 'left', 'right'];
	var face = null;
	for(var i = 0; i < faces.length; i++){
		if(key == faces[i].charAt(0)){
			console.log(key + " == " + faces[i].charAt(0));
			face = faces[i];
		}
	}
	return face;
}