function solution(a, b, n) {
    var answer = 0;
    let remain= n;
   
        while(remain>=a){
        // 받은 콜라 수 
        let get = (Math.trunc(remain/a))*b;
        // 가져간 콜라 수 
        let bring = a * (get/b);
        // 남은 콜라 수 
        remain = remain - bring + get;
        answer+=get;
        }
       
    
    return answer;
}