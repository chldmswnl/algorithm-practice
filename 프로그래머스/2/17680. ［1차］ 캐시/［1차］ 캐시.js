function solution(cacheSize, cities) {
    let answer=0;
    const cache=[];
    if(cacheSize===0){
        answer+=cities.length*5;
    }else{
        cities
        .map(city=>city.toLowerCase())
        .forEach((city,index)=>{
            const idx=cache.indexOf(city);
            if(idx>-1){
                answer+=1;
                cache.splice(idx,1);
            }else{
                answer+=5;
                if(cache.length===cacheSize) cache.shift();
            }
         cache.push(city);
        })
    
    }
    
    return answer;
}