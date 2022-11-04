// level 2. 주차요금계산

function solution(fees, records) {
    var answer = [];
    let carArr=[];
    let m=new Map();
    let carM=new Map();
    
    records.map(record=>{
        let arr=record.split(" ");
        
        if(arr[2]==="IN"){
             m.set(arr[1], arr[0]);
        }else if(arr[2]==="OUT"){
            let arriveTime=m.get(arr[1]).split(":");
            let departTime=arr[0].split(":");
            let totalMin=(parseInt(departTime[0])*60+parseInt(departTime[1]))-(parseInt(arriveTime[0])*60+parseInt(arriveTime[1]));
            
            let min=carM.get(arr[1]);
            carM.set(arr[1],min?min+totalMin:totalMin);
            m.delete(arr[1]);
            
        }
    })
    
    if(m.size>0){
        for (const entry of m.entries()) {
            let arriveTime=entry[1].split(":");
            let totalMin=(23*60+59)-(parseInt(arriveTime[0])*60+parseInt(arriveTime[1]));
             let min=carM.get(entry[0]);
            carM.set(entry[0],min?min+totalMin:totalMin);
        }
    }
    let arr=[...carM].sort((a,b)=>{return a[0]-b[0]});
    
    arr.map(v=>{
        answer.push(getPrice(v[1],fees[0],fees[1],fees[2],fees[3]))
    })
  
   
    return answer;
}

function getPrice(totalMin, basicMin, basicPrice, unitMin, unitPrice){
    if(totalMin<=basicMin){
        return basicPrice;
    }else if(totalMin>basicMin){
        return basicPrice+(Math.ceil((totalMin-basicMin)/unitMin)*unitPrice)
    }
}

