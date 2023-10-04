function solution(n, m, section) {
    let lastIdx=0;
    let count=0;
   section.map(item=>{
       if(item>lastIdx){
           lastIdx=item+m-1;
           count++;
       }
   })
    return count;
}