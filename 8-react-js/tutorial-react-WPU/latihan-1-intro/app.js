// seleksi container dengan id 'app'
const container = document.querySelector('#app');

// buat element h1
const title = document.createElement('h1');

// masukkan teks di dalam elemen h1
title.innerText = 'Belajar React Bareng Bapack Dhika 🍟';

// masukkan title sebagai title dari container app
container.appendChild(title);