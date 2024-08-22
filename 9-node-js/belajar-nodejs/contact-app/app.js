const fs = require('fs');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const userData = {
    nama: '',
    phone: null
};

rl.question('Masukkan nama kamu: ', (answer) => {
    userData.nama = answer;
    rl.question('Masukkan no HP: ', (answer) => {
        userData.phone = answer;
        const file = fs.readFileSync('data/contact.json', 'utf-8');
        const contacts = JSON.parse(file)

        contacts.push(userData); // JSON punya perilaku seperti array
        fs.writeFileSync('data/contact.json', JSON.stringify(contacts, null, 2));

        console.log('Terima kasih sudah memasukkan data kamoeh!');

        rl.close();
    });
})

fs.writeFileSync('data/contact.json', userData, 'utf-8');