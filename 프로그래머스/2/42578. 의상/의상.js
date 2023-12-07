function solution(clothes) {
    let answer=1;
    const hashMap=new Map();
    
    clothes.map(item=>{
        let num=hashMap.get(item[1]);
        if(num){
            num++;
             hashMap.set(item[1],num);
        }else{
             hashMap.set(item[1],1);
        }
    })

    hashMap.forEach((value, key) => {
         answer*=(value+1);
     });


    return answer-1;
   
}