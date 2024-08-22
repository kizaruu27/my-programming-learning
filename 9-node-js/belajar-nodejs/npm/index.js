const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('dionovan7@gmail.hei'));
// console.log(validator.isMobilePhone('085156427188', 'id-ID'));
// console.log(validator.isNumeric('085156427188S'));

console.log(chalk.blue('Halo Biru'));
console.log(chalk.bgGreen('Halo Hijau'));
console.log(chalk.italic('Text Miring'));

const namaAku = chalk`Dionovan {bgRed Ramadhani}`
const pesan = chalk`Lorem ipsum dolor {bgWhite.red AMBATUKAM} consectetur adipisicing elit. {cyan.italic.bgRed.green Corrupti}, placeat.`;
console.log(pesan);