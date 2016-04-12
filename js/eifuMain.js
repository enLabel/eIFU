function topMenuRotate() {
			    // Code for Chrome, Safari, Opera
			    document.getElementById("topMenu").style.WebkitTransform = "rotate(180deg)"; 
			    // Code for IE9
			    document.getElementById("topMenu").style.msTransform = "rotate(180deg)"; 
			    document.getElementById("topMenu").style.transform = "rotate(180deg)"; 
			}

function menuRotate() {
			    // Code for Chrome, Safari, Opera
			    document.getElementById("botttomMenu").style.WebkitTransform = "rotate(180deg)"; 
			    // Code for IE9
			    document.getElementById("botttomMenu").style.msTransform = "rotate(180deg)"; 
			    document.getElementById("botttomMenu").style.transform = "rotate(180deg)"; 
			} 

$('#right-button').click(function() {
      event.preventDefault();
      $('#collections').animate({
        marginLeft: "-=200px"
      }, "fast");
   });

$('#left-button').click(function() {
      event.preventDefault();
      $('#collections').animate({
        marginLeft: "+=200px"
      }, "fast");
   });