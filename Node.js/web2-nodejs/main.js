var http = require('http');
var fs = require('fs');
var url = require('url'); // Node.js한테 url이라는 모듈이 필요해!!!!!!!!!!!
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readdir('./data', function(error, filelist) {
                var title = 'Welcome !';
                var description = 'Hello, Node.js';
                var list = template.list(filelist);
                var html = template.HTML(title, list, `<h2>${title}</h2><p>${description}</p>`, `<a href="/create">create</a>`);
                response.writeHead(200);
                response.end(html); //웹 서버가 웹 브라우저가 요청한 파일을 읽어서 응답
            })
        } else {
            fs.readdir('./data', function(error, filelist) {
                var list = template.list(filelist);
                var filteredId = path.parse(queryData.id).base; // base만 사용함으로써 사용자가 요청한 정보를 정제!
                fs.readFile(`data/${filteredId}`, 'utf8', function(err, description) {
                    var title = queryData.id;
                    var sanitizedTitle = sanitizeHtml(title);
                    var sanitizedDescription = sanitizeHtml(description);
                    var html = template.HTML(sanitizedTitle, list, 
                        `<h2>${sanitizedTitle}</h2><p>${sanitizedDescription}</p>`,
                        `<a href="/create">create</a>
                         <a href="/update?id=${sanitizedTitle}">update</a>
                         <form action="delete_process" method="post" onsubmit="return confirm('정말로 삭제?');">
                            <input type="hidden" name="id" value="${sanitizedTitle}">
                            <input type="submit" value="delete">
                        </form>`); // 삭제는 POST 방식으로!!!!! 삭제/수정이 진행될 때의 링크가 외부에 유출되면 보안 문제.
                    response.writeHead(200);
                    response.end(html);
                });
            });
        }
    } else if (pathname === '/create') {
        fs.readdir('./data', function(error, filelist) {
            var title = 'WEB - create';
            var list = template.list(filelist);
            var html = template.HTML(title, list, `<form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
                <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
                <input type="submit" >
            </p>
        </form>`, '');
            response.writeHead(200);
            response.end(html); //웹 서버가 웹 브라우저가 요청한 파일을 읽어서 응답
        })
    } else if (pathname === '/create_process') {
        var body = '';
        // 서버가 데이터를 수신할 때 조각조각 나눠서 수신하는데, 수신할 때마다 여기에 지정된 이벤트가 실행됨.
        request.on('data', function(data) {
            body = body + data;
        });
        request.on('end', function() {
            var post = qs.parse(body); // 빈 객체 출력. JSON.stringfy() 이런 식으로 하면 일반 객체.
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end('');
            })
        }); // 약속
    } else if (pathname === '/update') {
        fs.readdir('./data', function(err, filelist) {
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description) {
                var title = queryData.id;
                var list = template.list(filelist);
                var html = template.HTML(title, list, `<form action="/update_process" method="post">
                        <input type="hidden" name="id" value="${title}">
                        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                        <p>
                            <textarea name="description" placeholder="description">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit" >
                        </p>
                    </form>`, `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
                response.writeHead(200);
                response.end(html);
            });
        });
    } else if (pathname === '/update_process'){
        var body = '';
        request.on('data', function(data) {
            body = body + data;
        });
        request.on('end', function() {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`, `data/${title}`, function(error) {
                fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
                })
            });
        });
    } else if (pathname === '/delete_process') {
        var body = '';
        request.on('data', function(data) {
            body = body + data;
        });
        request.on('end', function() {
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function(error) {
                response.writeHead(302, {Location: '/'});
                response.end();
            });
        });
    } else {
        response.writeHead(404); // 응답 코드 (미리 정해둔 약속)
        response.end('Not found');
    }
});
app.listen(3000);