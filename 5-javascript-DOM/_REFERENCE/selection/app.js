// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
// 	console.log(img.src);
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
// 	img.src =
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }



// -- [GET ELEMENT BY ID] --
// const banner = document.getElementById('banner');
// console.log(banner.nextElementSibling);
// console.log(banner.previousElementSibling);

// --------------------------------------------

// --[GET ELEMENT BY TAG NAME] --
// Valuenya akan berbentuk berupa sebuah collection karena dalam suatu document bisa terdapat beberapa tag yang sama
// Gak bisa menggunakan method array tapi tetap bisa melakukan iteration untuk looping
// Bukan sebuah array

// [HTML COLLECTION]
// Sebuah kumpulan element HTML yang merupakan object mirip seperti array yang di dalamnya dapat diakses dengan menggunakan index dan dapat melakukan iteration

// const allImages = document.getElementsByTagName('img');
// console.log(allImages[0]); // untuk mengakses collection HTML dapat menggunakan [] dan masukan indexnya seperti array (tapi bukan array)

// for (img of allImages) {
// 	// console.log(img.src);
// 	img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1920px-Cat_August_2010-4.jpg';
// }

// --[GET ELEMENT BY CLASS NAME] --
// Tipe valuenya sama seperti getElementById yaitu berupa HTML Collection
// Bedanya ini menggunjakan nama class

// const squareImages = document.getElementsByClassName('square');

// for (img of squareImages) {
// 	console.log(img.src);

// 	img.src = 'https://cdn0-production-images-kly.akamaized.net/72FuVdD7Dq45MwMiK-QE4hGS5Lo=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg';
// }

// --------------------------------------------

// -- [QUERY SELECTOR] --
// Fungsi all in one untuk menseleksi element dengan menggunakan id, tagname, atau class
// Penulisann argumentnya sama seperti menulis selector pada css ('#id' , '.class' , 'element')

// element
console.log(document.querySelector('p')); // mengambil element pertama dengan element p
console.log(document.querySelectorAll('p')); // mengambil semua element dengan element p

// Berdasarkan value attribute pada suatu element
console.log(document.querySelector(`Input[type="checkbox"]`));
console.log(document.querySelector(`div[role="navigation"]`));

// id
console.log(document.querySelector('#banner'));

// class
console.log(document.querySelector('.square'));
console.log(document.querySelectorAll('.square'));


// const links = document.querySelectorAll('p a'); // mengambil a pertama dari p pertama

// for (let link of links) {
// 	console.log(link.href);
// }



// const links = document.querySelectorAll('a');

// for (let link of links) {
// 	link.innerText = 'Aku adalah Kucing';
// }


// --------------------------------------------

const para = document.querySelector('p');
console.log(para);

// -- [INNER TEXT] --
// Mendapatkan text pada sebuah element html
// Text yang disimpan sesuai dengan apa yang ditampilkan di browser

console.log(para.innerText);


// -- [TEXT CONTENT] --
// Mendapatkan text pada sebuah element html beserta dengan format pada document html
// Text yang disimpan/ditampilkan juga akan menampilkan format seperti tab maupun enter

console.log(para.textContent);

// -- [INNER HTML] --
// Mendapatkan text, format, beserta element html yang berada di dalam element html tersebut
// Text akan menampilkan tag html jika di dalam element tersebut terdapat tag html juga

console.log(para.innerHTML);


// --------------------------------------------

// -- [MENDAPATKAN ATTRIBUTE PADA ELEMENT HTML] --
// Untuk mendapatkan attribute pada sebuah element html dapat dengan langsung mengakses property attributenya, atau menggunakan getAttribute()

const banner = document.querySelector('#banner');

// [UNTUK MENGECEK LIST ATTRIBUTE PADA SEBUAH ELEMENT HTML]
console.dir(banner.attributes);

// [UNTUK MENGAKSES ATTRIBUTE]
// Direct langsung
console.log(banner.src);
console.log(banner.id);
console.log(banner.alt);

// Menggunakan getAttribute()
console.log(banner.getAttribute('src'));
console.log(banner.getAttribute('id'));
console.log(banner.getAttribute('alt'));

// [MENGUBAH VALUE ATTRIBUTE]
// banner.src = 'https://kucing.go';
// banner.alt = 'Ini gambar kocheng';

// [MENAMBAHKAN ATTRIBUTE BARU]
// Untuk menambahkan attribute baru dapat menggunakan setAttribute(attribute, value) 
banner.setAttribute('class', 'banner-kocheng');

console.dir(banner.attributes);


// --------------------------------------------

// -- [STYLING DENGAN JAVASCRIPT DOM] --
// Tidak dapat mengakses property yang ada di CSS 
// Untuk melakukan styling di javascript DOM kita dapat mengakses property object style lalu memanggil property yang ingin diakses => .style.color

const links = document.querySelectorAll('a');

// Untuk mengecek property style pada suatu element
console.dir(banner.style);

// Untuk memanipulasi style pada document HTML
for (let link of links) {
    link.style.color = `rgb(0, 108, 134)`;
    link.style.textDecorationColor = `magenta`;
    link.style.textDecorationStyle = 'wavy';
}

banner.style.border = `solid 1px black`;


// --------------------------------------------

// -- [STYLING MENGGUNAKAN CLASSLIST] --
// Biasanya kita menggunakan setAttribute untuk menambahkan attribute baru pada sebuah element, begitu juga dengan class
// Namun jika kita ingin menambah class baru menggunakan setAttribute tanpa menimpa class yang lama itu tidak memungkinkan
// Karna setAttribute akan menimpa nilai class yang telah dimasukkan
// Untuk menambahkan class pada suatu element HTML kita dapat menggunakan classList()

const h1 = document.querySelector('h1');

// untuk menampilkan class apa saja pada suatu element
console.log(h1.classList);

// Untuk menambahkan class pada suatu element
h1.classList.add('bg-info');
h1.classList.add('text-white', 'border-danger');

console.log('Before deletion', h1.classList);

// Untuk menghapus class pada suatu element
h1.classList.remove('text-white');
console.log('After deletion', h1.classList);

// untuk mengecek suatu class ada atau tidak
console.log(h1.classList.contains('text-white'));
console.log(h1.classList.contains('bg-info'));


// --------------------------------------------

// -- [ELEMENT PARENT, CHILD, DAN SIBLING] --

const textBold = document.querySelector('b');
const paragraf = textBold.parentElement;

// [PARENT]
// Untuk menampilkan parent dari suatu element
console.log(textBold.parentElement);

// Untuk menampilkan parent dari parent dapat ditulis seperti ini
console.log(textBold.parentElement.parentElement); // dan seterusnya

// [CHILD]
// Untuk menampilkan child dari suatu element

// Menampilkan semua child dari suatu element -> value berupa html collection
console.log(paragraf.children);

// Menampilkan child berdasarkan index nilai dari child tersebut
console.log(paragraf.children[5]);

// Untuk menampilkan parent dari suatu child
console.log(paragraf.children[6].parentElement);

// [SIBLING]
// Untuk mengambil element yang sebelum maupun sesudah dari suatu element yang ditentukan

const img = document.querySelector('.square');

// Previious Sibling
// Element Sebelumnya
console.log(img.previousElementSibling); // untuk mengambil element sebelumnya
console.log(img.previousSibling); // untuk mengambil format yang berada sebelum element yang ditentukan -> seperti tab maupun enter

// Next Sibling
// Element Selanjutnya
console.log(img.nextElementSibling); // untuk mengambil element setelahnya
console.log(img.nextSibling); // untuk menagambil format yang berada setelah element tersebut

// --------------------------------------------

// -- [APPEND DAN APPEND CHILD] --
// Membuat element baru dengan menggunakan javascript

// [CREATE ELEMENT]
const newImage = document.createElement('img'); // parameter diisi dengan tag html yang ingin ditambahkan
newImage.src = 'https://bestfriends.org/sites/default/files/styles/hero_mobile/public/hero-dash/Asana3808_Dashboard_Standard.jpg?h=ebad9ecf&itok=cWevo33k'; // menambahkan value pada attribute / property src
newImage.classList.add('square');

// [APPEND CHILD]
// Menambahkan suatu element sebagai child pada element target
// AppendChild hanya bisa menerima value berupa element html saja

document.body.appendChild(newImage); // masukkan element ke dalam parameter

// [APPEND]
// Menambahkan suatu element sebagai child pada suatu element
// Append dapat berisi berupa text

para.append('Yaa, ini kocheng tamvan heuheuheu');

// [Menambahkan Element pada Posisi Spesifik]
// Menggunakan insertAdjacentElement untuk menambahkan suatu element pada posisi tertentu dari suatu elemnt lain

const h2 = document.createElement('h2');
h2.append('Ini kucing jenis langka lohhh');

h1.insertAdjacentElement('afterend', h2); // afterend berarti element ditambahkan setelah element target h1


// --------------------------------------------

// -- [MENGHAPUS ELEMENT] --
// [REMOVE CHILD]
// Menghapus child dari suatu element
// Parameter yang diperlukan harus berupa element spesifik yang akan diremove

const firstList = document.querySelector('li');
firstList.parentElement.removeChild(firstList); // flownya adalah dengan memanggil parentnya untuk menggunakan remove pada element itu sendiri

// [REMOVE]
// Menghapus element itu secara langsung

const gambarKucing = document.querySelector('img');
gambarKucing.remove();