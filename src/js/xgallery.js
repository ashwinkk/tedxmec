$(document).ready(function() {
	$(".gallery-image").click(handleImgClick);
	$("#close-window").click(handleImgClose);
});
function handleImgClick(e) {
	var img = e.target;
	console.log(img);
	$("#window").attr("src", img.src);
	$("#window-container").addClass("active-window");
}
function handleImgClose(e) {
	$("#window-container").removeClass("active-window");
}
