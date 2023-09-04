const http = require(`http`);

const server = http.createServer((req,res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    res.end(`API is working fine...`)
})


server.listen(5000,`127.0.0.1`,()=>{
    console.log(`Server Running ...\n\n Press Ctrl + C to close Server.`)
})