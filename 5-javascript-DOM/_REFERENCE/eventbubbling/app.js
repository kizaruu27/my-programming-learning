// -- [EVENT BUBBLING] --
// Event yang dieksekusi secara berantai
// Urutannya adalah dari child -> parent

const button = document.getElementById('changeColor');
const container = document.getElementById('container');

const generateRandomColor = () => {
	const a = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const c = Math.floor(Math.random() * 255);

	return `rgb(${a}, ${b}, ${c})`;
};

button.addEventListener('click', (e) => {
    container.style.backgroundColor = generateRandomColor();
    e.stopPropagation(); // untuk menghentikan event yang akan dieksekusi oleh parent
});

container.addEventListener('click', () => {
    container.classList.toggle('hide');
});