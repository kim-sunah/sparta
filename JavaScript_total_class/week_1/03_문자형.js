//2. 문자 : stirng(문자열 = 문자의 나열)
// '' = ""
let str ="Hello world"
console.log(str); // "Hello world"
console.log(typeof str); // "string"

//2-1. 문자열 길이 확인하기
console.log(str.length); // 11

//2-2. 문자열 결합하기
let str1 = "Hello world!";
let str2 = "Hello world";
let result = str1.concat(str2);
console.log(result); // "Hello worldHello world"

//2-3.문자열 자르기
let str3 = "Hello, world!";
console.log(str3.substr(3, 4)); // "lo,"
console.log(str3.slice(3, 4)); // "l"

//2-4.문자열 검색
let str4 = "Hello, world!";
console.log(str4.search("world")); //7

//2-5. 문자열 대체
let str5 = "Hello, world!";
console.log(str5.replace("world", "Javascript")); // "Hello, Javascript!"

//2-6. 문자열 분할
let str6 = "apple, banana, cherry";
console.log(str6.split(",")); // [ 'apple', ' banana', ' cherry' ]