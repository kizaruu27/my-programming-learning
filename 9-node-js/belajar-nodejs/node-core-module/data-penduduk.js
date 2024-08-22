// const { stdin, stdout } = require('process');

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const dataPenduduk = {
//     nama: null,
//     umur: null,
//     alamat: null
// }

rl.question('Masukkan nama kamoeh: ', (answer) => {
    dataPenduduk.nama = answer;
    rl.question('Masukkan umur kamoeh: ', (answer) => {
        dataPenduduk.umur = answer;
        rl.question('Masukkan alamat kamoeh: ', (answer) => {
            dataPenduduk.alamat = answer;
            const data = fs.readFileSync('data/data.json', 'utf-8');
            const penduduk = JSON.parse(data);
            penduduk.push(dataPenduduk);

            fs.writeFileSync('data/data.json', JSON.stringify(penduduk, null, 2));
            rl.close();
        })
    })
})

// fs.writeFile('ujang.txt', 'Hai nama saya ujang', (error) => {
//     console.log(error);
// })

// fs.readFile('textAsync.txt', 'utf-8', (error, data) => {
//     if (error) throw error;
//     console.log(data);
//     rl.close();
// });