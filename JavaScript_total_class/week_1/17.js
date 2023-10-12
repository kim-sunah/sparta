// for, while => ~동안 : 반복문
// for(초기값; 조건식; 증감식)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

//배열과 for문은 짝궁이다.
const arr = [1, 4, 6, 7, 3, 6]
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i])
}

//for ~ in문
//객체의 속성을 출력하는 문법
let person = {
    nemae: 'jone',
    age: 30,
    gender: "male",
};

for (let key in person) {
    console.log(person[key])
    // jone
    // 30
    // male
}