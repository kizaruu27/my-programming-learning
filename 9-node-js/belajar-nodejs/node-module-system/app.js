// console.log('Haloo Dunia!');
// function cetakNama(nama) {
//     return `Haloo nama saya ${nama}`;
// }

// module.exports = cetakNama;

function showData (data) {
    return `Pesan Data: ${data}`;
} 

const PI = 3.14;

const mahasiswa = {
    nama: 'Yanto',
    umur: 100,
    cetakData() {
        return `Halo nama saya ${this.nama}, umur saya ${this.umur} tahun`;
    }
}

class Manusia {
    constructor() {
        console.log('Objek manusia telah dibuat');
    }
}

// module.exports.Data = showData; // export function yang akan digunakan pada script lain
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Manusia = Manusia;

// module.exports = {
//     Data: showData,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Manusia: Manusia
// }

module.exports = {Data: showData, PI, mahasiswa, Manusia};