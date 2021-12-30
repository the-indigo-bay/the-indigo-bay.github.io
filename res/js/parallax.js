var parallax = document.querySelectorAll(".parallax");

var isIOS = (function () {
	var iosQuirkPresent = function () {
		var audio = new Audio();

		audio.volume = 0.5;
		return audio.volume === 1;
	};

	var isios = /iPad|iPhone|iPod/.test(navigator.userAgent);
	var isAppleDevice = navigator.userAgent.includes('Macintosh');
	var isTouchScreen = navigator.maxTouchPoints >= 1;

	return isios || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
});

if (isIOS) {
	parallax.forEach(function(value) {
		value.classList.add('ios');
	});
};
