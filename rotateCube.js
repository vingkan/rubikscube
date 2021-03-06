/*
* Code by David DeSandro: CSS 3D Transforms
* https://github.com/desandro/3dtransforms
*/

var init = function() {
  var box = document.querySelector('.visualizer').children[0],
      showPanelButtons = document.querySelectorAll('#show-buttons button'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);