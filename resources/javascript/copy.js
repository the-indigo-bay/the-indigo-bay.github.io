function copy() {
	var copyText = "amias.burrows@outlook.com";
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
	alert("Email Address copied to clipboard");
}

function back() {
	window.history.back();
}
