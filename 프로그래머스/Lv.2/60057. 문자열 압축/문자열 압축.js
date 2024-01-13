function solution(s) {
    let minLength=0;
    for(let i=1;i<s.length/2+1;i++){
        let idx=0;
        let sentence="";
        while(idx<s.length){
            let count=1;
            while(s.slice(idx,idx+i)===s.slice(idx+i, idx+i+i)){
                count++;
                idx+=i;
            }
            if(count>1){
                sentence+=count;
            }
           const str = s.slice(idx, idx+i);
           sentence = sentence + str;
           idx += i;
        }
        minLength=minLength===0?sentence.length:Math.min(minLength, sentence.length)
    }
    return minLength;
}