function solution(n) {
    let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
    let currentX=-1;
    let currentY=0;
    let count=n;
    let num=1;
    let location=0;
    
    while(count>0){
        for(let i=0;i<count;i++){
            if(location===0){
                 currentX++;
                arr[currentX][currentY]=num;
            }else if(location===1){
                 currentY++;
            arr[currentX][currentY]=num;
            }else if(location===2){
                currentX--;
            currentY--;
            arr[currentX][currentY]=num;
            }
            num++;
        }

        count--;
        location=location===2?0:location+1;
    }

    return arr.flat();
}