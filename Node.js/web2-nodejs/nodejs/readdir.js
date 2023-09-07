var testFolder = './data'; // 경로 정확히
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) { // readdir: 배열 return
    console.log(filelist);
});