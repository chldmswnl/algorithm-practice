function solution(s) {
    let answer=0;
    let firstOne=s[0];
    let x=1;
    let y=0;
    for(let i=1;i<s.length;i++){
        // 다른 글자면서 글자수가 같을 경우
        if(firstOne!==s[i] && x===y+1){
            answer++;
            x=0; y=0;
            firstOne=s[i+1];
        }else if(firstOne===s[i]){
            x++;
        }else if(firstOne!==s[i]){
            y++;
        }
    }
    if(x>0 || y>0) answer++;

    return answer;
}