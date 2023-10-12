//객체
// key = value pair
//하나의 변수에 여러개의 값을 넣을 수 있다

//1. 객체 생성 방법
//1-1. 기본적인 객체 생성 방법
let person = {
    name: "suna",
    age: 20,
    gender: "여자",
};

//1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("김선아", 30, '여자')
let person2 = new Person("김선화", 30, '여자')
let person3 = new Person("김서훈", 30, '남자')

//2. 접근하는 방법
console.log(person.name)    // suna
console.log(person.age)    // 20

//3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~
//3-1. Object.key() : key를 가져오는 메소드
let person4 = {
    name: "suna",
    age: 20,
    gender: "여자",
};

let key = Object.keys(person)
console.log(key)    //[ 'name', 'age', 'gender' ]

//3-2. values
let values = Object.values(person);
console.log(values)     //[ 'suna', 20, '여자' ]

//3-3. entries
//key와 value를 묶어서 배열로 만든 배열 (2차원 배열)
let entries = Object.entries(person);
console.log("entries=> " ,entries)  // [ [ 'name', 'suna' ], [ 'age', 20 ], [ 'gender', '여자' ] ]

//3-4. assign
//복사
let newPerson = {};
Object.assign(newPerson, person)
console.log(newPerson)  //{ name: 'suna', age: 20, gender: '여자' }

//복사는 하되, 특정값을 바꿈
let newPerson2 = {}
Object.assign(newPerson2, person,{ age:31})
console.log(newPerson2) //{ name: 'suna', age: 31, gender: '여자' }

//3-5. 객체 비교
//객체는 다른 데이터 타입에 비해서 큰 크기 
//그래서 메보리에 저장할때 별도의 공간에 저장
//비교연산자로 비교를 할 때 공간에 대한 주소를 비교하기때문에
//결과값이 false가 다름
let person6 = {
    name: "홍길동",
    age: 20,
    gender: "여자",
};
let person7 = {
    name: "홍길동",
    age: 20,
    gender: "여자",
};
console.log(person6 === person7)    //false

//다만 문자열화 시킨후 비교하면 주소값을 비교하는것이 아니기 때문에 true가 나옴

console.log(JSON.stringify(person6)===JSON.stringify(person7))  //true

//3-6. 객체 병합
let person8 = {
    name :  "kim suna",
    gender: " 여자"
}
let person9 = {
    age : 29
}
//중괄호를 해체시켜서 key value를 해체한 후 
//... : spread operator
//새로운 객체(perfectMan)에 부여
let perfectMan = {...person8, ...person9};
console.log(perfectMan)     //{ name: 'kim suna', gender: ' 여자', age: 29 }
