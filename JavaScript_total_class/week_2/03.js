//단축 속성명 : ㅔ개ㅔㄷㄱ쇼 놱소뭉
const name = "nbc";
const newAge = "30";

//key - value
const obj = {
    name : name,
    age: newAge
}

//전개 구문 = spread operator
//destructuring 과 함께 가장 많이 사용되는 문법 중 하나
let arr = [1,2,3];
console.log( arr)    //[ 1, 2, 3 ]
console.log(...arr)     //1 2 3

//나머지 매개변수 (rest parameter)
function exampleFunc(a,b,c,...args){
    console.log("arr : ",a,b,c)  // 1 2 3
    console.log("...arr : ",...args)     //  4 5 6 7
}
exampleFunc(1,2,3,4,5,6,7)

//템플릿 리터럴(Template Literal)
console.log(`Hello World ${3+3}`);