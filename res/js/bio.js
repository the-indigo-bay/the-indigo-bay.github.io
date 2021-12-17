var name = document.querySelector('#name').innerHTML;
var output = document.querySelector('#age');

var ages = {
	alex: {
		d: '9',
		m: '6',
		y: '2000'
	},
	amias: {
		d: '5',
		m: '6',
		y: '1999'
	},
	callum: {
		d: '11',
		m: '11',
		y: '2000'
	},
	george: {
		d: '29',
		m: '6',
		y: '2001'
	}
};

switch (name) {
	case 'Alex Plater':
		output.innerHTML += ' - (' + getAge(ages.alex) + ')';
		break;
	case 'Amias Burrows':
		output.innerHTML += ' - (' + getAge(ages.amias) + ')';
		break;
	case 'Callum Minks':
		output.innerHTML += ' - (' + getAge(ages.callum) + ')';
		break;
	case 'George Gray':
		output.innerHTML += ' - (' + getAge(ages.george) + ')';
		break;
}


function getAge(age) {
	var d = new Date().getDate();
	var m = new Date().getMonth() + 1;
	var y = new Date().getFullYear();

	if (age.m > m) {
		return y - age.y;
	} else if (age.m == m) {
		if (age.d >= d) {
			return (y + 1) - age.y;
		} else {
			return y - age.y;
		}
	} else {
		return y - age.y;
	}
}
