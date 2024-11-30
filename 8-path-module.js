const path = require('path');

 console.log(path.sep);

 const filepath = path.join('/content','subcontent','txt.txt');
 
 const base = path.basename(filepath);
 console.log(base)

 const absolute =  path.resolve(__dirname,'content','subcontent','txt.txt');
 console.log(absolute)