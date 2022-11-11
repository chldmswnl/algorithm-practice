// level 2. 숫자 카드 나누기 

function gcd(a, b) {
  const remainder = a % b;  
  if (remainder === 0) return b;  
  return gcd(b, remainder);  
}

function solution(arrayA, arrayB) {
    let arr=[];
    let gcdA,gcdB;
    let flag=false;
    
        if(arrayA.length>1){
            gcdA=gcd(arrayA[0],arrayA[1]);
            for(let i=2;i<arrayA.length;i++){
                gcdA=gcd(gcdA, arrayA[i]);
            }
        }else{
            gcdA=arrayA[0]
        }
        
        if(arrayB.length>1){
            gcdB=gcd(arrayB[0],arrayB[1]);
            for(let i=2;i<arrayB.length;i++){
                gcdB=gcd(gcdB, arrayB[i]);
            }
        }else{
            gcdB=arrayB[0];
        }
        
        if(gcdA>1){
            flag=false;
            arrayB.map(v=>{
                if(v%gcdA===0) flag=true;   
            })
            
            if(!flag){
                arr.push(gcdA);
            }
        }
        
        if(gcdB>1){
            flag=false;
            arrayA.map(v=>{
                if(v%gcdB===0) flag=true;
            })
            
            if(!flag){
                arr.push(gcdB);
            }
        }
  
    arr.sort((a,b) => {return b-a});

    
    return arr.length?arr[0]:0;
}
