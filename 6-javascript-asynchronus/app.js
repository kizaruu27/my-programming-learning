// -- [CALL STACK FUNCTION] --
// Mekanisme memory di Javascript
// Javascript merupakan bahasa pemrograman non-blocking yang artinya dapat menjalankan suatu program secara bersamaan dengan program lainnya
// Adalah mekanisme untuk interpreter untuk melacak lokasi script yang memanggil banyak fungsi-fungsi yang sedang dijalankan dan dipanggil dari dalam fungsi itu
// Sebuah urutan/step eksekusi sebuah logic dari javascript -> semakin sedikit step eksekusinya semakin baik
// Tumpukan instruksi yang siap untuk dijalankan

// --[INTERPRETER] --
// Program komputer yang membaca dan menjalankan source code secara langsung tanpa memerlukan proses compile terlebih dahulu

// Contoh code untuk mengetahui urutan eksekusi sebuah program
const perkalian = (x,y) => x * y;
const akar = x => perkalian(x, x);
const pythagoras = (a, b, c) => {
    return akar(a) + akar(b) === akar(c);
};

// console.log(pythagoras(3,4,5));

// -- [JAVASCRIPT THREAD] --
// Aslinya javascript itu single thread dan dibaca sinkronus
// [SINGLE THREAD] adalah sebuah program yang hanya dapat menjalankan satu proses dalam satu waktu
// [MULTI THREAD] sebuah program yang dapat menjalankan beberapa proses bersamaan dalam satu waktu
// Bisa multi thread bisa memungkinkan karna browser engine yang dikembangkan menggunakan C++, sehingga dapat memungkinkan program untuk dieksekusi secara multi-thread pada sebuah browser

// Menjalankan program secara multi-thread
// console.log('pertama');
// setTimeout(() => { // tidak perlu menunggu set time out selesai
//     console.log('dijalankan setelah 4 detik'); // disimpan terlebih dahulu di dalam memory browser engine dan munculkan setelah 4 detik
// }, 4000);
// console.log('kedua');


// -- [CALLBACK HELL] --
// Function yang dipanggil di dalam function secara terus menerus
// Sebuah callback di dalam callback yang terus menerus
// Tidak disarankan

// setTimeout(() => {
//     document.body.style.background = 'red';
//     setTimeout(() => {
//         document.body.style.background = 'yellow';
//         setTimeout(() => {
//             document.body.style.background = 'green';
//             setTimeout(() => {
//                 document.body.style.background = 'blue';
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

// -- [CALLBACK] --
// callback version
const requestCallback = (url, success, error) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			error('Error: Connection Time Out');
		}
		else {
			success(`Success: ${url} with ${delay}ms`);
		}
	}, delay);
};

// requestCallback('google.com', 
// (response) => {
// 	console.log(`Berhasil, ${response}`);
// },
// (error) => {
// 	console.log(`Failed, ${error}`);
// });

// -- [PROMISE] --
// Object yang dijanjikan asynchronus
// Respon object apakah respond function berhasil atau tidak

const requestPromise = (url) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay > 4000) {
                reject('Error: Connection Time Out');
            } else {
                resolve(`Success: ${delay}ms`);
            }
        }, delay);
    });
};

// requestPromise('google.com').then((response) => { // then ketika request sukses dijalankan
//     console.log(`Berhasil, ${response}`);
// }).catch((error) => { // catch ketika promise gagal menjalankan request
//     console.log(`Failed ${error}`);
// });

// kalau mau terus2an ada callback promise setelah berhasil harus return promisenya
// requestPromise('movie.com')
//     .then((result) => {
//         console.log(result + 'Page 1');
//         return requestPromise('google.com'); 
//     })
//     .then((result => {
//         console.log(result + 'Page 2');
//         return requestPromise('google.com');
//     }))
//     .then((result => {
//         console.log(result + 'Page 3');
//         return requestPromise('google.com');
//     }))
//     .then((result => {
//         console.log(result + 'Page 4');
//         return requestPromise('google.com');
//     }))
//     .catch((error) => {
//         console.log(error);
//     });

// --[MEMBUAT PROMISE] --
const newPromise = () => {
    return new Promise((resolve, reject) => {
        resolve(() => {
            'Berhasil';
        });
        reject(() => {
            'Gagal';
        });
    });
};

const delayedColorChange = (newColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = newColor;
            resolve();
        }, delay);
    });
};

// delayedColorChange('green', 2000)
//     .then(() => { delayedColorChange('red', 2000) })
//     .then(() => { delayedColorChange('purple', 2000) })
//     .then(() => { delayedColorChange('blue', 2000) })
//     .then(() => { delayedColorChange('yellow', 2000) });

// -- [ASYNCHRONUS FUNCTION] --
// [ASYNC]
// Fungsi async akan otomatis menjadi promise
// Kalo fungsinya punya data, maka resolvenya akan mengirimkan data juga yang bisa diolah
// Kalo di dalam function ada object throw error, maka akan menjalankan bagian reject
async function hello() {} // ini akan menjadi promise secara otomatis

const friendName = 'indra';

const halloLagi = async () => {
    if (friendName === 'indra') {
        return 'Hello Kamoeh'; // hasil dari resolve adalah berupa return
    } else {
        throw 'Maaf Gak Kenal'; // hasil dari reject adalah berupa throw -> bisa menandakan adanya exception atau error
    }
};

// Cara manggilnya sama kayak manggil promise
// halloLagi()
//     .then((res) => {
//         console.log('Response:', res);
//     })
//     .catch((error) => {
//         console.log('Error:', error);
// });

// [AWAIT]
// Hanya bisa digunakan pada async function
// await akan melakukan jeda proses selanjutnya di dalam function dengan menunggu promise yang dijalankan resolved
// akan melakukan jeda sampai ada response dari promise yang dieksekusi

async function changeColor() {
    await delayedColorChange('green', 1000); // keyword await akan memberikan jeda untuk proses selanjutnya dieksekusi
    await delayedColorChange('red', 1000); // menunggu delayedColorChange selesai terlebih dahulu baru lanjut ke proses selanjutnya
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('black', 1000);
    await delayedColorChange('blue', 1000);
    return 'All Done'; // baru akan dieksekusi jika dari proses sebelumnya sudah selesai dan mendapatkan resolve
}

// changeColor().then((response) => console.log(response));

async function printRainbow() {
    await changeColor();
    return 'All Done: Print Rainbow';
}

// printRainbow().then((res) => console.log('Response:', res));

// Contoh Lain
const fetchingDataFromAPI = () => {
    return new Promise((resolve, reject) => {
        console.log('Fetching Data...');
        const randomValue = Math.floor(Math.random() * 10);
        setTimeout(() => {
            if (randomValue < 5) {
                resolve('Fetching Success!');
            } else {
                reject(`Failed!, ${randomValue}`);
            }
        }, 2000);
    });
};

const fetchData = async () => {
    // try {
    //     const result = await fetchingDataFromAPI();
    //     console.log(result);
    //     console.log('End of Programm!');
    // }
    // catch (exception) {
    //     console.error('Error', exception);
    // }

    await fetchingDataFromAPI().then((res) => {
        console.log(res);
    }).catch((error) => {
        console.error(error);
        throw 'Fetching Failed';
    });

    return 'End Of Program'; // return value jangan masukin ke dalem then
};

// fetchData().then((res) => console.log(res)).catch((error) => console.log(error));

// --[HANDLING ERROR MENGGUNAKAN ASYNC AWAIT] --
// Untuk menghandling error pada async await function dapat menggunakan try and catch saat memanggil async function
async function requestHandler() {
    console.log('Hello');
    try {
        let result = await requestPromise('google.com');
        console.log(result);
        return 'End Of Program';
    } catch (error) {
        console.log('Error', error);
        throw 'Failed';
    }
}

requestHandler().then((res) => console.log(res)).catch((error) => console.error(error));

