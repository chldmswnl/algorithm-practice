function solution(weights) {
    let answer=0;
    const m=new Map();
    const position=[1,3/2,4/3,2];
    
    weights.sort((a,b)=>b-a).map((weight)=>{
        for(let i=0;i<position.length;i++){
            const cal=weight*position[i];
            if(m.get(cal)){
                answer+=m.get(cal);
            }
        }
          if(!m.get(weight)){
                m.set(weight,1);
          }else{
                let num=m.get(weight);
                m.set(weight,++num);
          }

    })

    return answer;
}
