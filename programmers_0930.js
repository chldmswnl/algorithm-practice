// 프로그래머스 level2. 영어 끝말잇기 

function solution(n, words) {
    var answer = [0,0];

    for(let i=0;i<words.length;i++){
        let p=i%n+1;
        let turn=Math.floor(i/n)+1;
        
        if(i>0){
            let lastChar=words[i-1].split("").pop();
            if(words.slice(0,i).includes(words[i]) || lastChar!==words[i][0] ){ 
                answer=[p,turn];
                break;
            }
       
        }
    }
    
    return answer;
}
