function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);
    const index=[];
    
    for(let i=0;i<numbers.length;i++){
        
        while(index.length && numbers[index[index.length-1]]<numbers[i]){
            answer[index.pop()]=numbers[i];
        }
        
        index.push(i);
        
    }
    
    return answer;
}