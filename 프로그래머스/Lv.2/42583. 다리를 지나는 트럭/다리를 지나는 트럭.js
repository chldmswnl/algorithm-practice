function solution(bridge_length, weight, truck_weights) {
   
    let totalWeight=0;
    const arr=new Array(bridge_length).fill(0);
    let answer=0;
    while(true){
        if(truck_weights.length===0 && totalWeight===0) break;
        if(totalWeight!==0){
            const truck=arr.shift();
            totalWeight-=truck;
            arr.push(0);
        }
        if(truck_weights.length>0 && totalWeight+truck_weights[0]<=weight){
            const truck=truck_weights.shift();
            arr[arr.length-1]=truck;
            totalWeight+=truck;
        }
        answer++;
    }
    
    return answer;
}