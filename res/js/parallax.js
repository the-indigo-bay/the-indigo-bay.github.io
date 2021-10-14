var parallax = document.querySelectorAll(".parallax");
var images = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12', 'img13', 'img14', 'img15', 'img16', 'img17', 'img18', 'img19', 'img20', 'img21'];

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
