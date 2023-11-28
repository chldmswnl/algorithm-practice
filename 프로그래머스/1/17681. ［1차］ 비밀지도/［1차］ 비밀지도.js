function solution(n, arr1, arr2) {
    var answer = [];
    const converted_arr1=[];
    const converted_arr2=[];
    let convertedNum='';
    arr1.map(num=>{
        convertedNum=num.toString(2);
        if(convertedNum.length!==n){
            const originLength=n-convertedNum.length;
            for(let i=0;i<originLength;i++){
                convertedNum=`0${convertedNum}`;
            }
        }
            converted_arr1.push(convertedNum);
    })
    arr2.map(num=>{
        convertedNum=num.toString(2);
 
        if(convertedNum.length!==n){
            const originLength=n-convertedNum.length;
            for(let i=0;i<originLength;i++){
             
                convertedNum=`0${convertedNum}`;
               
            }
        }
        converted_arr2.push(convertedNum);
    })
    
    converted_arr1.map((elem, index)=>{
        let str="";
        for(let i=0;i<elem.length;i++){
            if(elem[i]==='0' && converted_arr2[index][i]==='0'){
                str+=" "
            }else{
                str+="#"
            }
        }
        answer.push(str);
    })
    
    return answer;
}