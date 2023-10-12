//조건문 (if, else if, switch ...)
//1. if문
let x = 10;

//1-1
if (x > 0) {
    // main login
    console.log("x는 양수입니다");
}

let y="hello world";
if (y.length>5) {
    console.log(y);
}

//2. if-else문
if(x > 5) {
    console.log("x는 양수입니다");
} else {
    console.log("x는 음수입니다");
}

//3. if-else-if문
if(x > 5) {
    console.log("x는 양수입니다");
} else if(x < 0) {
    console.log("x는 음수입니다");
} else {
    console.log("x는 0입니다");
}

//4. switch문
let fruit = "apple";
switch(fruit) {
    case "apple":
        console.log("apple");   
        break;
    case "banana":
        console.log("banana");
        break;

    default:
        console.log("default");
        break;
}