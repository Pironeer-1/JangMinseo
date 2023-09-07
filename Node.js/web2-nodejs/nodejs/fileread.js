var fs = require('fs'); // fs 모듈을 사용하겠슴니다. 파일을 다루는 여러 가지 기능
fs.readFile('sample.txt', 'utf8', function(err, data) { // 파일 읽기 ~
    console.log(data);
});