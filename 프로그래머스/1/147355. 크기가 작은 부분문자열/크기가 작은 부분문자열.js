function solution(t, p) {
    var answer = 0;
    const p_length=p.length;
    for(let i=0; i<t.length;i++){
        if(i+p_length-1<t.length){
            if(Number(t.substr(i, p_length))<=Number(p)) answer++;
        }
    }
    return answer;
}