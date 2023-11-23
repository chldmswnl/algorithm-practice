function solution(bandage, health, attacks) {
 
    let count=1;
    const max_health=health;
    let remain_health=health;
    let attack_index=0;
    

    for(let index=1; index<=attacks[attacks.length-1][0];index++){

        if(remain_health===-1) break;
        if(attacks[attack_index][0]!==index){
            ++count;
        

            if(count===bandage[0]){
                
                if((remain_health+bandage[2]+bandage[1])>=max_health){
                    remain_health=max_health;
                }else{
                    remain_health+=(bandage[2]+bandage[1]);
                }
                count=0;
            }else{
                 if(remain_health+bandage[1]>max_health){
                remain_health=max_health;
            }else{
                remain_health+=bandage[1];
            }
            }
           
        }else{
            count=0;
            remain_health-=attacks[attack_index][1];
            attack_index++;
            if(remain_health<=0){
                remain_health=-1;
            }
        }
  
    }
    return remain_health;
}