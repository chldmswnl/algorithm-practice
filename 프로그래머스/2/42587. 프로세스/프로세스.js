function solution(priorities, location) {
    let answer=0;
    let idx=location;
    let popCount=0;
    
    while(priorities.length){
        const max=Math.max(...priorities);

            if(priorities[0]===max){
                priorities.shift();
                popCount++;
                 if(idx===0){
                    answer=popCount;
                     break;
                }
                idx--;
            }else{
                const first=priorities.shift();
                priorities.push(first);
                idx=idx===0?priorities.length-1:idx-1;
            }

    }
    return answer;
}