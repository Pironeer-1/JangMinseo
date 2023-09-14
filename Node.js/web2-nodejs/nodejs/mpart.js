var M = {
    v: 'v',
    f: function() {
        console.log(this.v);
    }
}

module.exports = M; // M 객체를 외부에서도 사용할 수 있게 하는 자바스크립트 코드