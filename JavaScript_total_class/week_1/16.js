//배열

//1. 생성
//1-1. 기본생성
let fruits = ['사과', '바나나', '오렌지'];

//1-2. 크기지정
let number = new Array(5);

console.log(number)     //[ <5 empty items> ]
console.log(number.length)  //5

//2. 요소 접근
console.log(fruits[0])  //사과

//3. 배열 메소드
//3-1. push
fruits.push("키위")
console.log(fruits)     //[ '사과', '바나나', '오렌지', '키위' ]

//3-2. pop
//배열의 마지막 요소를 삭제
fruits.pop();
console.log(fruits)     //[ '사과', '바나나', '오렌지' ]

//3-3. shift
//배열의 첫번째 요소를 삭제
fruits.shift();
console.log(fruits)     //[ '바나나', '오렌지' ]

//3-4. unshift
//배열의 맨 앞에 요소 추가
fruits.unshift("망고")
console.log(fruits)     //[ '망고', '바나나', '오렌지' ]

//3-5. splice
//x 번째요소부터 y번째 요소까지 삭제 후 요소 추가
fruits.splice(1,1,"포도")
console.log(fruits) //[ '망고', '포도', '오렌지' ]

//3-6. slice
//x 번째요소부터 y번째 요소까지 새로운 배열로 만들어서 리턴
let slickFruits = fruits.slice(1,2);
console.log(slickFruits)        //[ '포도' ]