function solution(prices) {
    var answer = [];
 
    prices.map((price,index)=>{
        const num=prices[index];
        let count=0;
        let idx=index;
        while(true){
            if(idx===prices.length-1){
                answer.push(count);
                break;
            };
            if(prices[idx+1]<num){
                answer.push(++count);
                break;
            }
            count++;
            idx++;
        }
       
    })
    return answer;
}