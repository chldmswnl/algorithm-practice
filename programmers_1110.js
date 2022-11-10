// level 1. 옹알이 2

function solution(babbling) {
    var answer = 0;
    let words=['aya','ye','woo','ma'];
    let vanWord=['ayaaya','yeye','woowoo','mama'];
    
    for(let i=0;i<babbling.length;i++){
        let word=babbling[i];
        let flag=false;
       
        vanWord.map(v=>{
            if(word.indexOf(v)>-1){
                flag=true;
            }
        })
        if(!flag){ 
            let tempWord=word;
            
            words.map((v,i)=>{  
                tempWord=tempWord.replaceAll(v,i);
            })
            tempWord=tempWord.replace(/[0123]/g, '');
            
            if(!tempWord.length){
                answer++;
            }
        }
    }
    
    
    return answer;
}
