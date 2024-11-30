const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to Home Page')
    }
    if(req.url==='/about'){
        res.end('Here it is short History')
    }
    res.end(
        `<h1>Opps!</h1>
         <p>The page which you are looking for is not existed<p>
        <a href='/'>Go to Home page</a>`
        )
    
});
server.listen(5000);