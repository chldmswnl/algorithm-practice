// level 2. 타겟 넘버 

function solution(numbers, target) {
    var answer = 0;
    
    function cal(sum, depth){
     
        if(depth===numbers.length){
         
            if(target===sum){
                answer++;
            }
            return;
        }
            cal(sum+numbers[depth],depth+1);
            cal(sum-numbers[depth],depth+1);
    }
    
    cal(0,0);
    return answer;
}
