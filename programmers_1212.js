// level 2. 디펜스 게임

function solution(n, k, enemy) {
   let left=0;
   let right=enemy.length;
    
   const getSum=(index)=>{
       return index+1-k>=0?enemy
       .slice(0,index+1)
       .sort((a,b)=>{return a-b})
       .slice(0,index+1-k)
       .reduce((a,b)=>a+b,0):0;
   }
   
   while(true){
       if(right-left===1) return right;
       let mid=Math.floor((right+left)/2);
       if(n>=getSum(mid)){
           left=mid;
       }else{
           right=mid;
       }
   }
   
}
