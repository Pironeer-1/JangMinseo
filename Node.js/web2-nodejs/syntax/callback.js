var a = function () { // 함수가 변숫값이 됨. 즉, 자바스크립트에서는 함수가 값.
    console.log('A');;
}

function slowfunc(callback) {
    callback();
} // 콜백을 매개변수로 받아서 호출

slowfunc(a);