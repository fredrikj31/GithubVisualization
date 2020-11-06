$("#menu-toggle").click(function (e) {
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


function alertCommit(commit) {
	alert(commit);
}