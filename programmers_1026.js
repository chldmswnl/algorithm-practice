// level 2. 피로도

function solution(k, dungeons) {
    var answer = 0;
    let leng=dungeons.length;
    let visited=Array(leng).fill(false);
    
    
    function dfs(currentAmount, cnt){
        
        for(let i=0;i<leng;i++){
            if(!visited[i] && currentAmount>=dungeons[i][0]){
                visited[i]=true;
                dfs(currentAmount-dungeons[i][1], cnt+1);
                visited[i]=false;
            }
        }
    
        answer=Math.max(answer, cnt);
        return;
    }
    
    dfs(k, 0);
    
    return answer;
}



function solution(k, dungeons) {
    var answer = 0;
    let leng=dungeons.length;
    let visited=Array(leng).fill(false);
    
    
    function dfs(currentAmount, cnt){
        
        for(let i=0;i<leng;i++){
            if(!visited[i] && currentAmount>=dungeons[i][0]){
                visited[i]=true;
                dfs(currentAmount-dungeons[i][1], cnt+1);
                visited[i]=false;
            }
        }
    
        answer=Math.max(answer, cnt);
        return;
    }
    
    dfs(k, 0);
    
    return answer;
}

