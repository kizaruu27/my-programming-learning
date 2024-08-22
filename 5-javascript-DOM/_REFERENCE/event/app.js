// const button = document.querySelector('#clickme');

// button.onclick = function () {
// 	console.log('You clicked me');
// };

// const scream = () => {
// 	console.log('Dont touch me');
// };

// button.onmouseover = scream;

// const eventbtn = document.querySelector('#eventbtn');
// eventbtn.addEventListener('click', stepSatu);
// eventbtn.addEventListener('click', stepDua);

// function stepSatu() {
// 	console.log('step satu');
// }

// function stepDua() {
// 	console.log('step dua');
// }

// // eventbtn.onclick = stepSatu;
// // eventbtn.onclick = stepDua;

const button = document.querySelector('#clickme');
// Jika seperti ini maka output akan dieksekusi duluan dan bukan saat di klik
// button.onclick = console.log('Click without pressed');

// Di jalankan seperti ini agar function dieksekusi saat diklik
button.onclick = function() {
	console.log('You click me!');
};

// Event yang dieksekusi ketika mouse hover ke element
// Inisiasi function terlebih dahulu lalu assign ke eventnya
const mouseOver = () => {
	console.log('Mouse Hover');
};
button.onmouseover = mouseOver;

// -- [ADDEVENTLISTENER] --
// Menambah event secara dinamis pada suatu element HTML
const eventBtn = document.querySelector('#eventbtn');
eventBtn.addEventListener('click', stepSatu);
eventBtn.addEventListener('click', stepDua);
eventBtn.addEventListener('click', () => {
	alert('Click with Add Event Listener');
});

function stepSatu() {
	console.log('Step Satu');
}

function stepDua() {
	console.log('Step Dua');
}

// eventBtn.onclick = stepSatu;
// eventBtn.onclick = stepDua;