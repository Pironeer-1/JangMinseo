var f = function() {
    console.log(1+1);
    console.log(1+2);
}
// var i = if(true) {console.log(1)};
// console.log(f);
// f();
var a = [f];
a[0]();

var o = {
    func:f // properties에 함수 대입
}
o.func();