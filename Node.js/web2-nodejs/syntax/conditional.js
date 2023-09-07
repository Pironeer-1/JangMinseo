var args = process.argv; // 프로그램 실행 시 함께 넘어온 입력값. 명령 뒤에 입력값 명시해야 함!!
console.log(args[2]);
console.log('A');
console.log('B');
if (args[2] == 1) {
    console.log('C1');

}
else {
    console.log('C2');
}
console.log('D');