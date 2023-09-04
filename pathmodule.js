const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
const b = path.dirname('C:\\temp\\myfile\\myfile.html');
const c = path.extname('C:\\temp\\myfile\\myfile.html');

console.log(a);
console.log(b);
console.log(c);
console.log(__filename,path.extname(__filename));
console.log(path.parse('C:\\temp\\myfile\\myfile.html'));