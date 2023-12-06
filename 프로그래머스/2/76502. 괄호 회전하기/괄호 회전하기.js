function solution(s) {
    let answer=0;
    let arr=[];
    let newStr=s.split("");
    s.split("").map((char,index)=>{
        let firstChar=newStr[0];
       
        newStr.map((char, index)=>{
            if(arr.length===0){
                arr.push(char);
            }else{
                if((arr[arr.length-1]==='['&&char===']')||
                  (arr[arr.length-1]==='('&&char===')')||
                   (arr[arr.length-1]==='{'&&char==='}')
                  ){
                    arr.pop();
                }else{
                    arr.push(char);
                }
            }
        })

        if(arr.length===0) answer++;
        newStr.shift();
        newStr.push(firstChar);
        arr=[];
    })
    
   
    return answer;
}