function solution(s){
    const tempArr=[];
    const tempArr2=[];
    s.split("").map(char=>{
        if(char==="("){
            tempArr.push(char);
        }else{
            
            if(tempArr.length!==0){
                tempArr.pop();
            }else{
                tempArr2.push(char);
            }
        }
    })
    return tempArr.length===0 && tempArr2.length===0
}