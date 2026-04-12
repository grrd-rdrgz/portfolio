
function viewImgCert(imgs) {
	var selectedImg = document.getElementById("selectedImage"); 
	var modal = document.getElementById("img-modal");
	
	selectedImg.src = imgs.src;
	modal.style.display = "block";
}

var modal = document.getElementById("img-modal");
var closeBttn = document.getElementsByClassName("modal-header")[0];

closeBttn.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if(event.target == modal) {
		modal.style.display = "none";
	}
}