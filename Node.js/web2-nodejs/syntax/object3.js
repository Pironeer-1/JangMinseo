var o = {
    v1: 'v1',
    v2: 'v2',
    f1: function () {
        console.log(this.v1); // 자신을 참조
    },
    f2: function () {
        console.log(this.v2);
    }
} // 데이터 저장 효율성 up


o.f1();
o.f2();