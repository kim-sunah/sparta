//형변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

//1. 암시적
//1-1. 문자열
let result = 1 +"2";
console.log(result); // 12
console.log(typeof result); // "string"

let result2 = "1" + true;
console.log(result2); // "1true"
console.log(typeof result2); // "string"

//1-2. 숫자
let result3 = 1 - "2";
console.log(result3); // -1
console.log(typeof result3); // "number"

let result4 = "2" *"3";
console.log(result4); // 6
console.log(typeof result4); // "number"

//2. 명시적 형 변환
//2-1. Boolean
console.log(Boolean(0)); // "false"
console.log(Boolean("")); // "false"
console.log(Boolean(null)); // "false"
console.log(Boolean(undefined)); // "false"
console.log(Boolean(NaN)); // "false"

console.log(Boolean("false")); // "true"
console.log(Boolean({})); // "true"

//2-2. 문자열
console.log(String(0)); // "0"
console.log(typeof String(0)); // "string"

console.log(String("")); // ""
console.log(typeof String("")); // "string"

console.log(String(null)); // "null"
console.log(typeof String(null)); // "string"

console.log(String(undefined)); // "undefined"
console.log(typeof String(undefined)); // "string"

console.log(String(NaN)); // "NaN"
console.log(typeof String(NaN)); // "string


// 1-3. Number
let result10 = Number("123")
console.log(result10); // 123
console.log(typeof result10); // "number"

let result11 = Number(123)
console.log(result11); // 123
console.log(typeof result11); // "number"