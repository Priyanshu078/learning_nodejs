import http from "node:http";

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/'){
        res.statusCode = 200;
        res.end('<h1> THis is the home page </h1>');
    }else if(req.url == '/cart'){
        res.statusCode = 200;
        res.end('<h1> THis is the cart page </h1>');
    }else if(req.url == '/product'){
        res.statusCode = 200;
        res.end('<h1> THis is the product page </h1>');
    }else if(req.url == '/search'){
        res.statusCode = 200;
        res.end('<h1> THis is the search page </h1>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Page not found </h1>');
    }
});

server.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
});