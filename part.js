/*
* Constructor for Part class
* Represents a single part of a Rubik's Cube (a miniature cube)
*/
function Part(temp){
	this.up = null;
	this.down = null;
	this.front = null;
	this.back = null;
	this.left = null;
	this.right = null;
	this.temp = temp || false;
	this.last = new Part();
}

/*
* var face (string): the face to be rotated
* var clockwise (boolean): rotate face clockwise, counter-clockwise if false
*/
Part.prototype.rotate = function(face, clockwise){
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