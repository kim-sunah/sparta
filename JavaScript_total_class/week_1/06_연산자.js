//연산자 (+, -, *, /, %)

//1.  더하기 연산자
console.log(1 + 2); // 3
console.log(1 + "1") //  2

//2. 빼기 연산자
console.log(1 - "2"); // -1
console.log(1 - 2) // -1

//3. 곱하기 연산자
console.log(2 * 2); // 4
console.log(2 * "2"); // 4

// 4. 나누기 연산자
console.log(6 / 2); // 3
console.log(6 / "2"); // 3

//5. 나누기연산자 (/) vs 나머지 연산자(%)
console.log(6 % 2); // 0
console.log(6 % "2"); // 0

//6. 할당 연산자(assignment)
// 6-1. 등호 연산자 (=)
let a = 1;
a = 2;
console.log(a); // 2

//6-2. 더하기 등호 연산자 (+=, -=, *=, /=, %=)
let b = 1;
b += 2;
console.log(b); // 3

b -= 2;
console.log(b); // 1

b *= 2;
console.log(b); // 2

b /= 2;
console.log(b); // 1

b %= 2;
console.log(b); // 1

// 6-3. 비교 연산자 (==,!=, <, >, <=, >=, ===)

//1. 일치 연산자 (===)
// 타임까지 일치해야 true를 반환하는 연산자
console.log(1 === 1); // true
console.log(1 === "1"); // false

//2. 불일치 연산자 (!==)
//타입까지 일치해야 false를 반환하는 연산자
console.log(1 !== 1); // false
console.log(1 !== "1"); // true

//3. 작다 연산자(<), 작거나 같다 연산자 (<=)
console.log(1 < 1); // false
console.log(1 < 2); // true

console.log(1 <= 1); // true
console.log(1 <= 2); // true
console.log(3 <= 2)   // false

//4. 논리 연산자
//4-1(논리곱 연산자) : 두 값 모두 true인 경우 true를 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//4-2(논리합 연산자) : 두 값 중 하나라도 true인 경우 true를 반환
console.log(true || true); // true
console.log(true || false); // true

//4-3(논리 부정 연산자 => !)
// : 값을 반대로 바꿈
console.log(!true); // false
let c = true;
console.log(!c); // false

//5. 삼항 연산자
// 조건에 따라 값을 선택한다.
let x = 10;
let result = (x > 5) ? "크다" : "작다";
console.log(result); // 크다

