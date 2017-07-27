$(document).ready(function() {
	$("#navbar-button").click(handleNavbar);
});

function handleNavbar(e) {
	if ($("#navbar-mob").hasClass("active-nav")) {
		$("#navbar-mob").removeClass("active-nav");
		$("#footer-outer,#content").css({ filter: "blur(0px)" });
	} else {
		$("#navbar-mob").addClass("active-nav");
		$("#footer-outer,#content").css({ filter: "blur(5px)" });
	}
}
