function solution(s)
{
    const arr=[];

    s.split("").map((char,index)=>{
        arr.push(char);
        if(arr.length===1) return;
        if(arr[arr.length-2]===arr[arr.length-1]){
            arr.pop();
            arr.pop();
        }
  })
  return arr.length?0:1;
}