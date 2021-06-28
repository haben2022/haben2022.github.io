const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    console.log(req.url);
    const url = req.url;
    const method= req.method;


    if(url === '/') {
        fs.createReadStream('index.html').pipe(res);
    }else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        });

        req.on('end', ()=>{
            const postmessage = Buffer.concat(body).toString();
            console.log(postmessage);
          

            
        });
    } else{
        res.writeHead(404);
        res.end('404 Page Not Found');
    }

   

}).listen(3000, ()=> console.log('listening to 3000'));