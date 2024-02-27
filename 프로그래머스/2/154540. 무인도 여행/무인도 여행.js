function solution(maps) {
    const answerrrr = [];
    const newMaps=new Array(maps.length);
    
    for(let i=0;i<maps.length;i++){
        newMaps[i]=maps[i].split("");
    }

    function dfs(x,y){
        if(x<0 || y<0 || x>=newMaps.length || y>=newMaps[0].length || newMaps[x][y]==="X"){
            return 0;
        }
        
        const currentVal=parseInt(newMaps[x][y]);
        newMaps[x][y]="X";
        
        return currentVal+dfs(x+1,y)+dfs(x-1,y)+dfs(x,y+1)+dfs(x,y-1);
    }

    for(let x=0;x<newMaps.length;x++){
        for(let y=0;y<newMaps[0].length;y++){
            if(newMaps[x][y]!=="X"){
               answerrrr.push(dfs(x,y));
            }
        }
    }

    return answerrrr.length>0?answerrrr.sort((a,b)=>a-b):[-1];
}