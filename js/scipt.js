// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the element
var menu = document.getElementById("header-wrapper");

//Get the offset positon of the element
var sticky = menu.offsetTop;

// Add the sticky class to the menu when you reach its scroll
// position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset > sticky) {
		menu.classList.add("sticky");
	} else {
		menu.classList.remove("sticky");
	}
}