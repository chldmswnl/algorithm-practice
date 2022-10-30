// level 2. 모의고사

function solution(answers) {
    var answer = [];
    let students=[
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let count=[0,0,0];
    
    answers.map((num,i)=>{
        if(students[0][i%5]===num){
            count[0]++;
        }
        if(students[1][i%8]===num){
            count[1]++;
        }
        if(students[2][i%10]===num){
            count[2]++;
        }
    })
    
    let max=0;
    count.map((v,i)=>{
        if(v>max){
            if(answer.length>0){
                while(answer.length!==0){
                    answer.pop();
                }
                
            }
            answer.push(i+1);
            max=v;
        }else if(max===v){
            answer.push(i+1);
        }
    })
    return answer;
}
