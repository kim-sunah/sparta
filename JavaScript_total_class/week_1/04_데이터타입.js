// 불리언(Boolean)
// true(참), false(거짓)
let booll1 = true;
let booll2 = false;

console.log(booll1);
console.log(typeof booll1);
console.log(booll2);
console.log(typeof booll2);

//if : 만약 ~ 한다면!
if (booll1) {
    console.log("참");
} else {
    console.log("거짓");
}

//null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
let y = null;
console.log(y);    // null

//undefined : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
//un : not, define : 정의하다
let z = undefined;
console.log(z);    // undefined

//object (객체)
let person = {
    name: "홍길동",
    age: 20,
}
console.log(person); // { name: '홍길동', age: 20 }

//array (배열)
//여러개의 데이터를 순서대로 저장하는 데이터 타입
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"