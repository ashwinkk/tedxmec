var baseData;
fetch("/src/data.json")
	.then(resp => resp.json())
	.then(data => (baseData = data));
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
	modal.children[0].src = speakerDetail.url;
	modal.children[1].innerHTML = speakerDetail.name;
	modal.children[2].innerHTML = speakerDetail.description;
}

function handleClose() {
	console.log("something");
	document.getElementById("modal-container").classList.remove("active-modal");
}
