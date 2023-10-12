//조건부 실행
let x = 10;

if(x>0){
    console.log("x는 양수입니다")   //x는 양수입니다
}

//and조건(&&)
(x>0) && console.log("x는 양수입니다")  //x는 양수입니다

// or조건(||)
//삼항 연산자와 단축키
let y;
let z=y||20;

console.log(z)  //20
