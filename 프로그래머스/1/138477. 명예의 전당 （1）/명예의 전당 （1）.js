function solution(k, score) {
    var answer = [];
    const arr=[];
    
    score.map(num=>{
        if(arr.length<k){
            arr.push(num);
            arr.sort((a,b)=> b-a);
            answer.push(arr[arr.length-1]);
        }else{
            if(arr[k-1]<num){
                arr[k-1]=num;
                arr.sort((a,b)=> b-a);
            }
             answer.push(arr[k-1]);
        }
    })
    return answer;
}