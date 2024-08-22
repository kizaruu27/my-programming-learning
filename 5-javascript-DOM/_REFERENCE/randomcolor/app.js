// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
// 	const newColor = generateRandomColor();
// 	document.body.style.backgroundColor = newColor;
// 	h1.innerText = newColor;
// });

// const generateRandomColor = () => {
// 	const r = Math.floor(Math.random() * 255);
// 	const g = Math.floor(Math.random() * 255);
// 	const b = Math.floor(Math.random() * 255);

// 	return `rgb(${r}, ${g}, ${b})`;
// };

const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const colorText = document.createElement('p');

const generateRandomColor = () => {
	const a = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const c = Math.floor(Math.random() * 255);

	return `rgb(${a}, ${b}, ${c})`;
};

button.addEventListener('click', () => {
	const randomColor = generateRandomColor();
	document.body.style.backgroundColor = randomColor;
	colorText.innerText = randomColor;
	h1.appendChild(colorText);
});