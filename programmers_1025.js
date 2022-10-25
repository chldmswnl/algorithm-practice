// level 2. 

function solution(priorities, location) {
    var answer = 0;
    let arr=[];
    
    priorities.map((num,i)=>{
        arr.push([num,i]);
    })

    let sortedPri=priorities.sort((a,b)=>{return a-b});
    let count=1;
       while(arr.length>0){
          
            if(arr[0][0]===sortedPri[sortedPri.length-1]){
                if(arr[0][1]===location){
                    answer=count;
                }
                sortedPri.pop();
                arr.shift();
                count++;

            }else{
                let first=arr[0];
                arr.shift();
                arr.push(first);
            }
       }
    
    return answer;
}
