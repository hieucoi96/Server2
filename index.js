var http = require('http');

http.createServer(function ( reg, res){
    res.end('Xin chao mn nhe!!');
}).listen(process.env.PORT || 3000);
