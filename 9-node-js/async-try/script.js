// Synchronus
// const getUserSync = (id) => {
//     const name = id === 1 ? 'Ucup' : 'Surucup';
//     return {
//         id : id,
//         name : name
//     }
// }

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hallo Dunia';
// console.log(halo);

// Asynchronus
const getUser = (id, callback) => {
    const random = Math.floor((Math.random() * 4000));
    setTimeout(() => {
        const name = id === 1 ? 'Ucup' : 'Surucup';
        callback({id, name})
    }, random);
}

const userSatu = getUser(1, result => {
    console.log(result);
});

const userDua = getUser(2, result => {
    console.log(result);
});

const halo = 'Haloo';
console.log(halo);