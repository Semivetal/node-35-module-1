/* 
const http = require('http');
const fs = require('fs').promises;

const PORT = 8081;

const requestHandler = async (request, response) => {
    const manifest = await fs.readFile('./package.json', 'utf8');
    response.writeHead(200, { 'Content-type': 'text/json' });
    return response.end(manifest);
}

// response.end('<h1>Dili-Dili, Trali-vali</h1>');

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
    if (err) {
        console.error('Error at server launch', err);
    }
    console.log(`Server works at port ${PORT}`);
}); 
*/

/* // const fs = require('fs');
const fs = require('fs').promises;
const path = require('path');

// fs.readFile('./data.txt', 'utf8', (error, data) => {
//fs.readFile(path.resolve('./package.json'), 'utf8', (error, data) => {
//    if (error) {
//        console.log(error);
//    }
//    console.log(data)
// })

(async () => {
    try {
        // виводить в консоль весь вміст вказаного файлу
        const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
        console.log(data)

        // дописує/додає інформацію у вибраний файл
        const newContent = `${data} kRaSaVa =)`
        await fs.writeFile('./data1.txt', newContent, 'utf8');

        // перейменовує файли
        await fs.rename('./dateUtils.js', 'dateUtilsNewName.js');

        // видаляє файли
        await fs.unlink('./dateUtilsNewName.js');
    } catch (err) {
        console.error(err)
    }
})();
//    const data = await fs.readFile(path.resolve('./data.txt'), 'utf8')
//    console.log(data)


console.log(1234) */

// const path = require('path');
// console.log(path.resolve('dateUtils.js'));

/* 
const Calc = require('calc-js').Calc;

// console.log(process.argv);
// const [, , a, b] = process.argv

// [2] і [3] є індексами в масиві, вказаному вище, тобто
// const [, , a, b] = process.argv  =  const a = process.argv[2]
//                                     const b = process.argv[3]

const a = process.argv[2]
const b = process.argv[3]


console.log(new Calc(parseFloat(a)).sum(parseFloat(b)).finish());
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish()); 
*/

// -----------------------------------------------------------------
/*
const { getCurrentDate } = require('./dateUtils');

console.log(__dirname);
console.log(__filename); 
*/
// console.log(`get current date fn result: ${getCurrentDate()}`);