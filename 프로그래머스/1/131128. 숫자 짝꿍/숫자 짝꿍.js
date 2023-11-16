function solution(X, Y) {
    var answer = '';
    const XArr=[0,0,0,0,0,0,0,0,0,0];
    const YArr=[0,0,0,0,0,0,0,0,0,0];
    let common=[];
    X.split("").map(num=>{
        XArr[num]++;
    });
     Y.split("").map(num=>{
        YArr[num]++;
    });
    
    XArr.map((xNum,index)=>{
        if(xNum===0 || YArr[index]===0) return;
        const num=Math.min(xNum, YArr[index]);
        
        for(let i=0;i<num;i++){
            common.push(index);
        }
    })
    
    let commonTotal=0;
    
    common.map(num=>commonTotal+=num);
    
   if(common.length===0){
       answer="-1";
   }else if(commonTotal===0){
        answer="0";
    }else{
        common.sort((a,b)=>b-a);
        answer=common.join("");
    }
    
    return answer;
}