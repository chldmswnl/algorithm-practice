function solution(keymap, targets) {
    let answer=[];
    targets.map(target=>{
        let count=0;
        let flag=false;
        [...target].map(char=>{
            const arr=[];
            
            keymap.map(key=>{
                
                
               if(key.indexOf(char)>=0) arr.push(key.indexOf(char)+1);
            });
            arr.length ?count+=Math.min(...arr):flag=true;
        })
        answer.push((count && !flag) ?count:-1);
    })

    return answer;
}