function solution(n) {
    let arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
    let currentX=-1;
    let currentY=0;
    let count=n;
    let num=1;

    
    while(count>0){
        for(let i=0;i<count;i++){
            currentX++;
            arr[currentX][currentY]=num;
            num++;
        }

        for(let i=0;i<count-1;i++){
            currentY++;
            arr[currentX][currentY]=num;
                num++;
        }
        for(let i=0;i<count-2;i++){
            currentX--;
            currentY--;
            arr[currentX][currentY]=num;
                num++;
        }
        count-=3;
    }

    return arr.flat();
}