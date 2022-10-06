// level 2. 구명보트

function solution(people, limit) {
    var answer = 0;
    let leftIndex=0;
    let rightIndex=people.length-1;
    people.sort((a,b)=>a-b);
   
    
    while(leftIndex<=rightIndex){
        if(people.length===1){
            rightIndex--;
        }else{
            if((people[leftIndex]+people[rightIndex])<=limit){
                leftIndex++;
                rightIndex--;
            }else{
                rightIndex--;
            }
        }
        answer++;
    }

    return answer;
}
