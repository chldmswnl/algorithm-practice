// level 2. 모음사전 

function solution(word) {
    var answer = 0;
    let vowels=['A','E','I','O','U']
    let count=-1;
    
    function dfs(currentWord){
        count++;
        if(currentWord===word){
            answer=count;
        }else if((currentWord!==word) && currentWord.length<5){
            for(let i=0;i<vowels.length;i++){
                dfs(currentWord+vowels[i]);
            }
        }
    }
    
    dfs("");
    
    return answer;
}
