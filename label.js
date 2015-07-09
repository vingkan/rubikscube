/*
* Constructor for Label class
* Represents a single color on a part of a cube. Could be configured for labels other than colors...
*/
function Label(color){
	this.color = color || null;
}

Label.prototype.toChar = function(){
	var colorString = this.color + "";
	return colorString.charAt(0).toUpperCase();
}