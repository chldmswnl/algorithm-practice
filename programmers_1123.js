// level 1. 과일 장수

function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a,b)=>b-a);
   
    for(let i=0;i<score.length%m;i++){
        score.pop();
    }
    
    let count=m-1;
    while(count<score.length){
        answer+=score[count]*m;
        count+=m;
    }

    return answer;
}
