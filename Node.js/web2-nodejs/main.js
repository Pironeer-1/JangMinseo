var http = require('http');
var fs = require('fs');
var url = require('url'); // Node.js한테 url이라는 모듈이 필요해!!!!!!!!!!!
var qs = require('querystring');

function templateHTML(title, list, body, control) {
    return `
    <!doctype html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
             <h1><a href="/">WEB</a></h1>
            ${list}
            ${control}
            ${body}
        </body>
    </html>
    `; // 얘는 HTML 코드
}

function templateList(filelist) {
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
    }
    list = list + '</ul>'
    return list;
}

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    // var title = queryData.id;
    // var description = queryData.description;

    // console.log(url.parse(_url, true));

    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readdir('./data', function(error, filelist) {
                var title = 'Welcome !';
                var description = 'Hello, Node.js';
                var list = templateList(filelist);
                var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`, `<a href="/create">create</a>`);
                response.writeHead(200);
                response.end(template); //웹 서버가 웹 브라우저가 요청한 파일을 읽어서 응답
            })
        } else {
            fs.readdir('./data', function(error, filelist) {
                var list = templateList(filelist);
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
                    var title = queryData.id;
                    var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`, `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else if (pathname === '/create') {
        fs.readdir('./data', function(error, filelist) {
            var title = 'WEB - create';
            var list = templateList(filelist);
            var template = templateHTML(title, list, `<form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
                <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
                <input type="submit" >
            </p>
        </form>`, '');
            response.writeHead(200);
            response.end(template); //웹 서버가 웹 브라우저가 요청한 파일을 읽어서 응답
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
    } else if (pathname === `/update`) {
        fs.readdir('./data', function(err, filelist) {
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
                var title = queryData.id;
                var list = templateList(filelist);
                var template = templateHTML(title, list, `<form action="/update_process" method="post">
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
                response.end(template);
            });
        });
    } else {
        response.writeHead(404); // 응답 코드 (미리 정해둔 약속)
        response.end('Not found');
    }
});
app.listen(3000);