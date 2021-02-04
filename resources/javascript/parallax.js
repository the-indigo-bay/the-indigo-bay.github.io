var parallax = document.querySelectorAll(".shiftImage");
var images = ['img1', 'img2', 'img3'];

for (let i = images.length - 1; i >= 0; i--)
{
	const j = Math.floor(Math.random() * i);
	const temp = images[i];
	images[i] = images[j];
	images[j] = temp;
};

for (var i = 0; i < parallax.length; i++)
{
	parallax[i].classList.add(images[i]);
};
