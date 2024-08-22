// -- [INPUT KEYBOARD EVENT DAN OBJECT DALAM EVENT] --
document.querySelector('button').addEventListener('click', (e) => {
	console.log(e);
});

const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
	switch (e.code) {
		case 'ArrowUp':
			console.log('Arrow Atas');
			break;
		case 'ArrowDown':
			console.log('Arrow Bawah');
			break;
		case 'ArrowRight':
			console.log('Arrow Kanan');
			break;
		case 'ArrowLeft':
			console.log('Arrow Kiri');
			break;
		default:
			console.log('Diabaikan')
			break;
	}
});

input.addEventListener('keyup', () => {
	console.log('Tombol dilepas');
});