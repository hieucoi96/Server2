var http = require('http');
var fs = require('fs');

http.createServer(function ( request, response){
    // res.end('Xin chao mn nhe!!');
    var url = request.url;
    if (url == '/') {
        response.writeHead('200', {'Content-Type': 'text/html'});
        fs.readFile('index.html', function (error, data) {
            if (error == null) {
                response.write(data);
                response.end();
            } else {
                response.end(error);
            }
        });
    } else response.end('404 Not Found');
}).listen(process.env.PORT || 3000);
