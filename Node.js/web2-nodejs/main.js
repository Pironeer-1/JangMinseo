var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response) {
    var url = request.url;
    if (request.url == '/') {
        url = '/index.html';
    }
    if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url)); //웹 서버가 웹 브라우저가 요청한 파일을 읽어서 응답
});
app.listen(80);