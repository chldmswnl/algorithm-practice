function solution(s) {
    var answer = [];
    s.split("").map((char,index)=>{
        const str=s.substr(0,index).split("").reverse().join("");
        const idx=str.indexOf(char);
        answer.push(idx===-1?-1:idx+1)
    })
    return answer;
}