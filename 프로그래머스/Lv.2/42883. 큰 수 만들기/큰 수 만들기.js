function solution(number, k) {
    var answer = '';
    const arr=[];
    const numArr=number.split("");
    let count=k;
    numArr.map((num,index)=>{
       while(arr.length>0&&count!==0 && arr[arr.length-1]<num){
            arr.pop();
            count--;
       }
       
       arr.push(num); 
    
   })
    
    if(count>0){
        for(let i=0;i<count;i++){
            arr.pop();
        }
    }
 
    return arr.join("");
}