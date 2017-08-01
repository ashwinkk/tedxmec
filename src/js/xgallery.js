var galleryImages = [
	"/dist/imgs/gallery/1.jpg",
	"/dist/imgs/gallery/2.jpg",
	"/dist/imgs/gallery/3.jpg",
	"/dist/imgs/gallery/4.jpg",
	"/dist/imgs/gallery/5.jpg",
	"/dist/imgs/gallery/6.jpg",
	"/dist/imgs/gallery/7.jpg",
	"/dist/imgs/gallery/8.jpg",
	"/dist/imgs/gallery/9.jpg",
	"/dist/imgs/gallery/10.jpg"
];
var currIndex = -1;

$(document).ready(function() {
	$(".gallery-image").click(handleImgClick);
	$("#close-window").click(handleImgClose);
	$("body").keydown(function(e) {
		if (e.which == 37) prevImage();
		if (e.which == 39) nextImage();
	});
	$("#next").click(nextImage);
	$("#prev").click(prevImage);
	console.log(galleryImages.reverse());
});

function handleImgClick(e) {
	var img = e.target;
	$("#window").attr("src", img.src);
	console.log(img.src);
	var url = new URL(img.src);
	currIndex = galleryImages.indexOf(url.pathname);
	$("#content").css({ "z-index": "99" });
	$("#window-container").addClass("active-window");
}

function handleImgClose(e) {
	$("#window-container").removeClass("active-window");
	setTimeout(function() {
		$("#content").css({ "z-index": "" });
	}, 500);
}

function nextImage(e) {
	if (currIndex >= 0) {
		currIndex++;
		if (currIndex == galleryImages.length) currIndex = 0;
		$("#window").attr("src", galleryImages[currIndex]);
	}
}

function prevImage(e) {
	if (currIndex >= 0) {
		currIndex--;
		if (currIndex == -1) currIndex = galleryImages.length - 1;
		$("#window").attr("src", galleryImages[currIndex]);
	}
}
