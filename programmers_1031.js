// level 1. 햄버거 만들기 

function solution(ingredient) {
    var answer = 0;
    let stack=[];
 
    ingredient.map(v=>{
        stack.push(v);
        let leng=stack.length-1;
     
        if(leng=>3){
            if(stack[leng-3]===1 && stack[leng-2]===2 && stack[leng-1]===3 && stack[leng]===1){
                for(let i=0;i<4;i++){
                    stack.pop();
                }
                answer++;
            }
        }
    })
    
    return answer;
}
