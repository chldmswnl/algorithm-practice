function solution(park, routes) {
    
    // 최대 넓이, 높이 
    let maxRow=park.length-1;
    let maxCol=park[0].length-1;
    
    // 시작 포인트
    let row = park.findIndex((s) => s.includes("S"));
    let col = park[row].indexOf("S");
 
    routes.map(route=>{
        const [d, n]=route.split(" ");
        let tempRow=row;
        let tempCol=col;
        let flag=true;
        
        for(let i=0;i<Number(n);i++){

        
        if(d==="E") tempCol++;
        else if(d==="S") tempRow++;
        else if(d==="W") tempCol--;
        else if(d==="N") tempRow--;
        
        if(tempRow > maxRow || 
           tempCol > maxCol || 
           tempRow < 0 || 
           tempCol < 0 || 
           park[tempRow][tempCol]==="X"){
            flag=false;
            break;
        }
        }
  
        if(flag){
            row=tempRow;
            col=tempCol;
        }
    })

    

    return [row, col];
}
