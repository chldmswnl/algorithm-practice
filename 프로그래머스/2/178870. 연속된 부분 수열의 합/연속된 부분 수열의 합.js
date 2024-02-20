function solution(sequence, k) {
    var answer = [];
    const accumArr=[0];
    
    sequence.map(num=>{
         accumArr.push(accumArr[accumArr.length-1]+num);   
    })
    
    let left=0;
    let right=0;

    while(left<=right){
        const sum=accumArr[right]-accumArr[left];

        if(sum===k){ 
                if(answer.length===0){
                    answer.push(left);
                    answer.push(right-1);
                }else{
                  const leng=right-left-1;
                  const arrLeng=answer[1]-answer[0];
     
                 if(leng<arrLeng){
                    answer=[left, right-1];
                  }
                }
        }
        sum<k?right++:left++;
    }
       
    
    return answer;
}