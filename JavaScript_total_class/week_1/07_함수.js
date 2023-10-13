// 함수 = function(기능)
//input, output

// 1. 함수 선언문
// 두 개의 숫자를 입력받아서 덧셈을 한 후 내보내는 함수
function add(a, b) {
    //함수 내부에서 실행할 로직
    return a + b;
}

//2. 함수 표현식
let add2 = function (a, b) {
    return a + b;
}

//함수를 호출한다(= 사용한다.)
//함수명() -> add()
console.log(add(1, 2)); // 3
let functionResult = add2(1, 2);
console.log(functionResult); // 3