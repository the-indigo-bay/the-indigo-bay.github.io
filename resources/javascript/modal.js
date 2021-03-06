
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.images;
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var modal = function(){
	myModal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

for (var i = 0; i < img.length; i++) {
	if (img[i].classList.contains('socialLink') || img[i].classList.contains('modal-content')) {
	} else {
		img[i].addEventListener('click', modal, false);
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	myModal.style.display = "none";
}
