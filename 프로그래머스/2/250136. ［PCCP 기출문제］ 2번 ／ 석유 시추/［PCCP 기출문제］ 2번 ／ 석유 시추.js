function solution(land) {
    var answer = 0;
    const idMap = new Array(land.length).fill(0).map(() => new Array(land[0].length).fill(-1));
    let amountArr=[];
    const columnAmout=[];

    function dfs(x,y, indexId){
       const stack = [[x, y]];
        let count = 0;

        while (stack.length > 0) {
            const [curX, curY] = stack.pop();

            if (curX < 0 || curY < 0 || curX >= land.length || curY >= land[0].length || land[curX][curY] === 0) {
                continue;
            }

            const value = land[curX][curY];
            idMap[curX][curY] = indexId;
            land[curX][curY] = 0;
            count += value;

            stack.push([curX + 1, curY], [curX - 1, curY], [curX, curY + 1], [curX, curY - 1]);
        }

        return count;
    }
    let indexId=0;
    for(let i=0;i<land.length;i++){
        for(let j=0;j<land[0].length;j++){
            if(land[i][j]!==0){
                amountArr.push(dfs(i,j,indexId));
                indexId++;
            }
        }
    }
    
    let idList=[];
    let count=0;

    for(let i=0;i<idMap[0].length;i++){
        for(let j=0;j<idMap.length;j++){
    
               if(idMap[j][i]!==-1&&!idList.includes(idMap[j][i])){
                   count+=amountArr[idMap[j][i]];
                   idList.push(idMap[j][i]);
               }
        }
        columnAmout.push(count);
        idList=[];
        count=0;
    }
    
    
    return Math.max(...columnAmout);
}

