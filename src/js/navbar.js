$(document).ready(function() {
	$("#navbar-button").click(handleNavbar);
});

function handleNavbar(e) {
	if ($("#navbar-mob").hasClass("active-nav")) {
		$("#navbar-mob").css({ opacity: 0 });
		setTimeout(function() {
			$("#navbar-mob").removeClass("active-nav");
		}, 400);
		$("#footer-outer,#content").removeClass("filter-transit");
	} else {
		$("#navbar-mob").addClass("active-nav");
		setTimeout(function() {
			$("#footer-outer,#content").addClass("filter-transit");
			$("#navbar-mob").css({ opacity: 1 });
		}, 100);
	}
}

var wrapperMenu = document.querySelector(".wrapper-menu");

wrapperMenu.addEventListener("click", function() {
	wrapperMenu.classList.toggle("open");
});
