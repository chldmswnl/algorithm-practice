function solution(arr) {
    var answer = 0;
    arr.sort((a,b)=>a-b);
    
    let count=1;
    let count2=0;
    let biggestNum=arr[arr.length-1];
 
    while(count2!==arr.length-1){
      answer=biggestNum*count;
      count2=0;
    for(let i=0;i<arr.length-1;i++){
        if(answer%arr[i]===0){
            count2++;
        }
    }
    count++;
    }
    
    return answer;
}
