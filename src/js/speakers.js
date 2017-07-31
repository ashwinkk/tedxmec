var baseData;
fetch("/src/data.json")
	.then(function(resp) {
		resp.json();
	})
	.then(function(data) {
		baseData = data;
	});
$(document).ready(function() {
	$(".detail-view").click(handleModel);
	$("#close-modal").click(handleClose);
});

function handleModel(e) {
	console.log("called");
	var elem = e.target;
	var speakerDetail = baseData.speakers[e.target.id];
	var modalContainer = document.getElementById("modal-container");
	console.log(modalContainer);
	modalContainer.classList.add("active-modal");
	var modal = document.getElementById("modal-inner");
	if (window.innerWidth < 700) $("body").addClass("stay");
	modal.children[0].src = speakerDetail.url;
	modal.children[1].innerHTML = speakerDetail.name;
	modal.children[2].innerHTML = speakerDetail.description;
}

function handleClose() {
	console.log("something");
	$("body").removeClass("stay");
	document.getElementById("modal-container").classList.remove("active-modal");
	var modal = document.getElementById("modal-inner");
	setTimeout(function() {
		modal.children[0].src = "";
		modal.children[1].innerHTML = "";
		modal.children[2].innerHTML = "";
	}, 400);
}
