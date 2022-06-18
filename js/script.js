function plus() {
	let x = document.getElementById('numX').value
	x = Number(x)
	let y = document.getElementById('numY').value
	y = Number(y)
	let result = x + y
	document.getElementById('output').innerHTML = result;
	if (document.getElementById('output').innerHTML === 'NaN') {
		document.getElementById('output').innerHTML = 'Брат, введи число, не будь тупым, это же калькулятор'
	} else {
		document.getElementById('output').innerHTML = result;
	}
}

function minus() {
	let x = document.getElementById('numX').value
	x = Number(x)
	let y = document.getElementById('numY').value
	y = Number(y)
	let result = x - y
	document.getElementById('output').innerHTML = result;

	if (document.getElementById('output').innerHTML === 'NaN') {
		document.getElementById('output').innerHTML = 'Брат, введи число, не будь тупым, это же калькулятор'
	} else {
		document.getElementById('output').innerHTML = result;
	}
}

function multiply() {
	let x = document.getElementById('numX').value
	x = Number(x)
	let y = document.getElementById('numY').value
	y = Number(y)
	let result = x * y
	document.getElementById('output').innerHTML = result;

	if (document.getElementById('output').innerHTML === 'NaN') {
		document.getElementById('output').innerHTML = 'Брат, введи число, не будь тупым, это же калькулятор'
	} else {
		document.getElementById('output').innerHTML = result;
	}
}

function division() {
	let x = document.getElementById('numX').value
	x = Number(x)
	let y = document.getElementById('numY').value
	y = Number(y)
	let result = x / y
	document.getElementById('output').innerHTML = result;

	if (document.getElementById('output').innerHTML === 'NaN') {
		document.getElementById('output').innerHTML = 'Брат, введи число, не будь тупым, это же калькулятор'
	} else {
		document.getElementById('output').innerHTML = result;
	}
}

function pow() {
	let x = document.getElementById('numX').value
	x = Number(x)
	let y = document.getElementById('numY').value
	y = Number(y);
	let result = Math.pow(x, y);
	document.getElementById('output').innerHTML = result;

	if (document.getElementById('output').innerHTML === 'NaN') {
		document.getElementById('output').innerHTML = 'Брат, введи число, не будь тупым, это же калькулятор'
	} else {
		document.getElementById('output').innerHTML = result;
	}
}
function reset() {
	document.getElementById('numX').value = '';
	document.getElementById('numY').value = '';
	document.getElementById('output').innerHTML = ''
}