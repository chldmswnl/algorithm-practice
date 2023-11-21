function solution(dartResult) {
    const arr=[];
    const charArr=[];
    
    for(let i=0;i<dartResult.length;i++){
         if(dartResult[i] >= 0 && dartResult[i] <= 9 ) { 
            if( dartResult[i] == 1 && dartResult[i+1] == 0 ) {
                num = 10;
                i++;
            } else { 
                num = dartResult[i];
            }
         }else if(dartResult[i]==="S"){
             arr.push(Math.pow(num,1));
         }else if(dartResult[i]==="D"){
               arr.push(Math.pow(num,2));
         }else if(dartResult[i]==="T"){
              arr.push(Math.pow(num,3));
         }else if(dartResult[i]==="*"){
             if(arr.length===1){
                 arr[arr.length-1]*=2;
             }else{
                arr[arr.length-1]*=2;
                arr[arr.length-2]*=2;
             }
             charArr.push("*");
         }else if(dartResult[i]==="#"){
             if(charArr[charArr.length-1]==="*"){
                 arr[arr.length-1]=-arr[arr.length-1];
             }else{
                 arr[arr.length-1]*=-1;
             }
              charArr.push("#");
         }
    }
   
   const answer = arr.reduce((accumulator, currentValue) => 
                             accumulator + currentValue);

    return answer;
}