const http = require('http');
const fs=require("fs");

const server=http.createServer();

server.on("request",(req,res)=>{
    fs.readFileSync("./pic",(err,data)=>{
        if(err) throw err
        res.end(data);
    })
})
server.listen(3000);