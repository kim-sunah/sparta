// 구조분해 할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나 객채의 속성

//(1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log("1", value1)    //1
console.log("2", value2)    //new

let arr = ["value1", "value2", "value3"];
let [a,b,c] = arr;

console.log(a)  //value1
console.log(b)  //value2
console.log(c)  //value3

let [d,e,f,g] = arr;

console.log(g); //undifined

let [h,i,j,k =1] =arr;

console.log(k)  //1

//(2) 객체인 경우
let user = {
    name:"suna",
    age:28
}

//구조분해 할당
let {name, age} = {
    name : "nbc",
    age:30
}
console.log("name => ", name)   //string
console.log("name => ", age)   //number

//새로운 이름으로 할당
let {
    name : newName,
    age:newAge
} = user

console.log("newName = >",newName)
console.log("newAge = >",newAge)

let {name1, age1, birthday} = user1;

console.log(birthday)   //undifined