const form = document.querySelector('#form');
const input = document.querySelector('input');
const list = document.querySelector('ul');

// input.addEventListener('change', (e) => { // event yang dijalankan ketika ada perubahan pada input
// 	console.log('nilai berubah');
// });

// input.addEventListener('input', (e) => { // event yang dijalankan ketika ada inputan value
// 	document.querySelector('h1').innerText = input.value;
// });

form.addEventListener('submit', (e) => {
	e.preventDefault(); // mencegah default behaviour pada suatu element
	// form submit biasanya dia akan pindah ke halaman destinasi yang dituju
	// dengan preventDefault dia tidak akan pergi kemana2

	if (input.value !== '') {
		const listItem = document.createElement('li');
		listItem.innerText = input.value;
		list.append(listItem);

		input.value = null;
	}
});

// document.querySelector('a').addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log('Harusnya pindah');
// });

// -- [EVENT DELEGATION] --
// Event yang mewakili suatu element yang dikenakan event listener tapi yang dieksekusi adalah hal lainnya
// const allList = document.querySelectorAll('li');
// for (let list of allList) {
// 	list.addEventListener('click', () => {
// 		list.remove();
// 	})
// }

list.addEventListener('click', (e) => {
	e.target.nodeName === 'LI' && e.target.remove(); // ini adalah short circuit
	// operator && akan mengevaluasi operand dari kiri ke kanan
	// kalau operand sebelah kiri bernilai true maka operand di kanan akan dieksekusi

	console.dir(e.target);

	// e.target.remove(); // target merupakan element child dari suatu element
	// target hanya bisa diakses dengan object event
});