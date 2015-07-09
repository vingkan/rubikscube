/*
* Constructor for Part class
* Represents a single part of a Rubik's Cube (a miniature cube)
*/
function Part(labels, temp){
	this.up = labels[0] || null;
	this.down = labels[1] || null;
	this.front = labels[2] || null;
	this.back = labels[3] || null;
	this.left = labels[4] || null;
	this.right = labels[5] || null;
	this.temp = temp || false;
	this.last = new Part();
}

/*
* Basic method to rotate the orientation of a part with respect to basic directions
* var face (string): the face to be rotated
* var clockwise (boolean): rotate face clockwise, counter-clockwise if false
*/
Part.prototype.rotate = function(face, clockwise){
	//Save the part's last orientation in a temporary part
	var lastOrientation = new Part({this.up, this.down, this.front, this.back, this.left, this.right}, true);
	this.last = lastOrientation;
	//Rotate label values around focused face
	if(clockwise){
		switch(face){
			case 'up':
				this.left = this.last.front;
				this.back = this.last.left;
				this.right = this.last.back;
				this.front = this.left;
				break;
			case 'down':
				this.right = this.last.front;
				this.back = this.last.right;
				this.left = this.last.back;
				this.front = this.left;
				break;
			case 'front':
				this.up = this.last.left;
				this.right = this.last.up;
				this.down = this.last.right;
				this.left = this.last.down;
				break;
			case 'back':
				this.up = this.last.right;
				this.right = this.last.down;
				this.down = this.last.left;
				this.left = this.last.up;
				break;
			case 'left':
				this.up = this.last.back;
				this.back = this.last.down;
				this.down = this.last.front;
				this.front = this.last.up;
				break;
			case 'right':
				this.up = this.last.front;
				this.front = this.last.down;
				this.down = this.last.back;
				this.back = this.last.up;
				break;
			default:
				alert("Invalid Face.");
				break;
		}
	}
}