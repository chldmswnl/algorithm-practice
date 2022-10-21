// level 2. 괄호 회전하기 

function solution(s) {
    var answer = 0;
    let newArr=s.split('');
    
    for(let i=0;i<newArr.length;i++){
        
        let open=[];
        let flag=true;
        
        newArr=[...newArr.slice(1),newArr[0]];
        
        newArr.map(char=>{
            if(char==="[" || char==="(" || char==="{"){
                open.push(char);
            }else if(char==="]" ||char===")" || char==="}"){
                if(open.length===0) 
                {
                    flag=false;
                }else{
                    switch (char){
                        case ']':
                            if(open[open.length-1]==='['){
                                open.pop();
                            }else{
                                flag=false;
                            }
                            break;
                        case ')':
                            if(open[open.length-1]==='('){
                                open.pop();
                            }else{
                                flag=false;
                            }
                            break;
                        case '}':
                            if(open[open.length-1]==='{'){
                                open.pop();
                            }else{
                                flag=false;
                            }
                            break;
                    }
                }
                
            }
        })
       
        if(flag && open.length===0) answer++;
    }

    return answer;
}
