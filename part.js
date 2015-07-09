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
		}
	}

}