var http = require('http');
var fs = require('fs');
var url = require('url'); // Node.js한테 url이라는 모듈이 필요해!!!!!!!!!!!

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if (_url == '/') {
        _url = '/index.html';
    }
    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id); //웹 서버가 웹 브라우저가 요청한 파일을 읽어서 응답
});
app.listen(3000);