function solution1(s){
    let p=0;
    let y=0;
    let result = s.toUpperCase();
    for(let i=0; i<s.length+1; i++){
        if(result[i] ==="P"){
            p++;
        }
        if(result[i] ==="Y"){
            y++;
        }
    }
    return p==y;
}

//이게 훨씬 조음
function solution(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

//java

// class Solution {
//     public int solution(int[] absolutes, boolean[] signs) {
//         int answer = 0;
//         for(int i=0; i<signs.length; i++){
//             answer += absolutes[i] *(signs[i]? 1:-1);
//         }
//         return answer;
//     }
// }

function solution(absolutes, signs) {
    var answer=0;
    for(i in signs){
        absolutes[i] = absolutes[i]*(signs[i]?1:-1)
        answer +=absolutes[i];
    }
    return answer;
}