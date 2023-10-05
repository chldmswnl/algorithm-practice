function solution(cards1, cards2, goal) {
    let count=0;
    let card1Idx=0;
    let card2Idx=0;
    goal.map(item=>{
        while(true){
            if(card1Idx>cards1.length-1 && card2Idx>cards2.length-1) break;
            if(cards1[card1Idx]===item){
                count++;
                card1Idx++;
                    break;
            }
            if(cards2[card2Idx]===item){
                count++;
                card2Idx++;
                break;
            }
            if(cards2[card2Idx]!==item && cards1[card1Idx]!==item) break;
            if(cards2[card2Idx]!==item){    
                card2Idx++; 
            }
            if(cards1[card1Idx]!==item){     
                card1Idx++;
            }
        }
        
    })
    return count===goal.length?"Yes":"No";
}