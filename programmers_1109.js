// level1. 푸드파이터 대회

function solution(food) {
    var answer = '';
    let str='';
    
    for(let i=1;i<food.length;i++){
        if(food[i]>=2){
            for(let j=0;j<parseInt(food[i]/2);j++){
                str+=i;
            }
        }
    }
    return str+'0'+str.split("").reverse().join('');
}
