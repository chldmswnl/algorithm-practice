function returnDivisorNum(num){
    let result = []
    let index = 1;
    while (index <= num / 2) {
      if (num % index === 0) result.push(index)
      index++
    }
    result = [...result, num];
    return result.length;
}

function solution(number, limit, power) {
    var answer = 0;
    for(let i=1;i<=number;i++){
        let num=returnDivisorNum(i);
        if(num>limit){
            answer+=power;
        }else{
            answer+=num;
        }
        
    }
    return answer;
}