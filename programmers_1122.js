// level 2. 다리를 지나는 트럭 

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge_cars=Array.from({length: bridge_length}, () => 0);
    let total=0;
    
    answer++;
    bridge_cars.shift();
    total=truck_weights[0];
    bridge_cars.push(truck_weights.shift());

    while(total){
        answer++; 
        total-=bridge_cars.shift();
        
        if(truck_weights.length>0 && total+truck_weights[0]<=weight){
            total+=truck_weights[0];
            bridge_cars.push(truck_weights.shift());
        }else{
            bridge_cars.push(0)
        }
  
    }
    
    return answer;
}
