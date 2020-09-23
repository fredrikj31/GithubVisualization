// just grab a DOM element
var element = document.querySelector("#graph-container");

// And pass it to panzoom
panzoom(element, {
	smoothScroll: false,
});

// Sidebar Toggler
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
	if ($("#wrapper").hasClass("toggled") == true) {
		$("#toggleArrow").removeClass("fa-arrow-left");
		$("#toggleArrow").addClass("fa-arrow-right");
	} else {
		$("#toggleArrow").removeClass("fa-arrow-right");
		$("#toggleArrow").addClass("fa-arrow-left");
	}
  });