// level 2. 택배상자

function solution(order) {
    var answer = 0;
    let count=0;
    let sub=[];
    
    for(let i=1;i<=order.length;i++){
        if(order[count]===i){
            count++;
        }else if(sub[sub.length-1]===order[count]){
                sub.pop();
                count++;
                i-=1;
        }else{
            sub.push(i);
        }
    }

    while(sub.length){
        if(sub[sub.length-1]===order[count]){
                sub.pop();
                count++;
        }else{
            break;
        }
    }
    
    
    return count;
}
