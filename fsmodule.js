const fs = require('node:fs');

// fs.readFile(
//     'file.txt',
//     'utf8',
//     (err,data)=> {
//         console.log(err,data);
//     }
// );

const data = fs.readFileSync('file.txt');
console.log(data.toString());



// fs.writeFile('file2.txt', "This is a file whcih is created using write file", ()=>{console.log("written in file");});

fs.writeFileSync('file3.txt',"this is file written using write file sync");

console.log("THis is a feature");   