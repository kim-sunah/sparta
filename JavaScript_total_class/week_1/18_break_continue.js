//while
// while(조건){
//     메인로직
//     증감
// }

//3 초과 100 미만의 숫자 중 5의 배수인 것만 출력
let i = 3;
while (i < 100) {
    if (i % 5 === 0 && i >= 5) {
        console.log(i)
    }
    i++;
}
console.log()
//do ~ while
i=0;
do {
    //최초의 1번은 무조건 실행
    console.log("do" ,i)     //0
    i++;
} while (i > 10) {
    console.log("while",i) 
}

//break : 강제종료
for(let i=0; i<10; i++){
    if(i ===5){
        break
    }
    console.log(i)
}

//continue : 건너뛰기
for(let i=0; i<10; i++){
    if(i ===5){
        continue;
    }
    console.log(i)
}