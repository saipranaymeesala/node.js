
const { readFile, writeFile, write } = require("fs");
console.log('start')
readFile("./content/first.txt",'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    const second = result;
    writeFile('./content/result-sync.txt',`Here is the result content ${first},${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
            }
            console.log('Done with the task')
        }
    )
  })
});
console.log('Going for the next task')