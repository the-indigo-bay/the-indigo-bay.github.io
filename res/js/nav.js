var open = false;

function showNav(e) {
	e.removeEventListener('click', showNav);
	const button = document.getElementById('hamburger');
	const nav = document.getElementsByTagName('nav')[0];

	switch(open) {
		case false:
			open = !open;
			button.classList.add('show');
			nav.style.display = 'flex';
			break;
		case true:
			open = !open;
			button.classList.remove('show');
			nav.style.display = 'none';
			break;
	}
	e.addEventListener('click', showNav);
}
