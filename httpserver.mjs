import http from "node:http";

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('This is the response of an http request');
});

server.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});