// level 2. 귤 고르기 

function solution(k, tangerine) {
    var answer = 0;
    let m = new Map();
    
    tangerine.map(v=>{
        let value=m.get(v);
        m.set(v, value?value+1:1);
    })
    
    let arr=[...m]
    arr.sort((a,b)=>{
        return b[1]-a[1]
    })
    
    let count=0;
    while(k>0){
        k-=arr[count][1]
        answer++;
        count++;
    }
    
    
    return answer;
}
