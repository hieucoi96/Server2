var http = require('http');

http.createServer(function ( reg, res){
    res.end('Xin chao mn nhe!!');
}).listen(process.env.port || 3000);
