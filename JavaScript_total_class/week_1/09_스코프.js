// 스코프, 전역변수, 지역변수, 화살표 함수
function test() {
    let x = 10;
    console.log(x);
}
console.log(x); // x is not defined
test();