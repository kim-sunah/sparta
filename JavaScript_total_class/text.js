function solution(name, yearning, photo) {
    var answer = [];
    let cost = {};
    
    for (let i in name) {
        cost[name[i]] = yearning[i]
    }
    for (let i in photo) {
        for (let j of photo[i]) {
            if(answer[i]== null)
                answer[i] =0
            if (cost[j] !== undefined) {
                answer[i] = (answer[i] + cost[j])
            }
        }
    }
    return answer;
}