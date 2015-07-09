/*
* Constructor for Label class
* Represents a single color on a part of a cube. Could be configured for labels other than colors...
*/
function Label(color){
	this.color = color || null;
}

/*
* Returns the first letter of the label's color, '-' if blank
*/
Label.prototype.toChar = function(){
	var colorString = this.color + "";
	var letter = "";
	if(colorString == "blank"){
		letter = '-';
	}
	else{
		letter = colorString.charAt(0).toUpperCase();
	}
	return letter;
}