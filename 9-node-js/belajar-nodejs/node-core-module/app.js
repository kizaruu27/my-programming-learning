// Core Module
// File System
// const { error } = require('console');
const fs = require('fs');

// Menuliskan string ke file secara synchcronus
// try {
//     fs.mkdirSync('data');
// } catch (error) {
//     console.log('Path is already exist!');
// }

// fs.writeFileSync('data/text.txt', 'Ini adalah penulisan string ke direktori synchronus');

// Menuliskan string ke file asynchronus
// fs.writeFile('textAsync.txt', 'Ini adalah penulisan string ke direktori secara asynchronus', (error) => {
//     console.log(error);
// });


// Membaca isi file secara synchronus
// const data = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(data);

// Membaca isi file secara asynchronus
fs.readFile('textAsync.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    console.log(data);
});


// Readline
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Masukkan nama kamoeh: ', (nama) => {
//     rl.question('Masukkan nomor HP kamoeeh: ', (phone) => {
//         console.log(`Nama kamu ${nama} dengan nomor telpon ${phone}`);
//         rl.close();
//     })
// });

// const { log } = require('console');
// const fs = require('fs');
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const userData = {
//     nama: '',
//     phone: null
// };

// rl.question('Masukkan nama kamu: ', (answer) => {
//     userData.nama = answer;
//     rl.question('Masukkan no HP: ', (answer) => {
//         userData.phone = answer;
//         const file = fs.readFileSync('data/contact.json', 'utf-8');
//         const contacts = JSON.parse(file)

//         contacts.push(userData); // JSON punya perilaku seperti array
//         fs.writeFileSync('data/contact.json', JSON.stringify(contacts, null, 2));

//         console.log('Terima kasih sudah memasukkan data kamoeh!');

//         rl.close();
//     });
// })

// fs.writeFileSync('data/contact.json', userData, 'utf-8');