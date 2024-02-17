function solution(book_time) {

    const arr=[];
    
    function changeMin(time){
        const hour=time.split(":")[0];
        const min=time.split(":")[1];
        return parseInt(hour)*60+parseInt(min)
    }
  
    book_time.sort().map(time=>{
       const start=changeMin(time[0]);
        const end=changeMin(time[1]);
        
        if(arr.length===0){
            arr.push(end+10);
        }else{
            let flag=false;
            for(let i=0;i<arr.length;i++){
                if(start>=arr[i] && !flag){
                    arr[i]=end+10;
                    flag=true;
                }
            }
            
            if(!flag){
                arr.push(end+10);
            }
        }
        
    })
    return arr.length;
}