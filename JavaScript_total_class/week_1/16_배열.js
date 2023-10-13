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
fruits.splice(1, 1, "포도")
console.log(fruits) //[ '망고', '포도', '오렌지' ]

//3-6. slice
//x 번째요소부터 y번째 요소까지 새로운 배열로 만들어서 리턴
let slickFruits = fruits.slice(1, 2);
console.log(slickFruits)        //[ '포도' ]

//forEach, map, filter, find
let numbers = [1, 2, 3, 4, 5, 4, 6, 2, 4];

//콜백 함수 : 매개변수 자리에 함수를 넣는것
//아래의 경우 numbers에 있는 값들이 반복해서 순회
numbers.forEach(function (item) {
    console.log(item)
    // 1
    // 2
    // 3
    // 4
    // 5
    // 4
    // 6
    // 2
    // 4
});

// (2) map
//기존의 배열을 가공해서 새로운 배열을 리턴
//항상 원본 배열의 길이만큼 리턴
let newNumbers = numbers.map(function (item) {
    return item * 2;
})
console.log(newNumbers)     //[ 2,  4, 6, 8, 10,8, 12, 4, 8]

//(3) filter
//조건에 해당되는 요소만 배열로 만들어서 리턴
let filterdNumbers = numbers.filter(function(item){
    return item ===5
})
console.log(filterdNumbers)     //[ 5 ]

//(4) find
//조건에 맞는 요소 왼쪽부터 순회해서  1개를 반환 
let result = numbers.find(function(item){
    return item >3
})
console.log(result)     //[ 5 ]