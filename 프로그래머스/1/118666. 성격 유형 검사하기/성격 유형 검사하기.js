function solution(survey, choices) {
    var answer = [];
    const score=[3,2,1,0,1,2,3];
    const score_set={
       "R":0, "T":0, "C":0, "F":0, "J":0, "M":0, "A":0, "N":0
    }
    const char_arr=["RT","CF","JM","AN"];
    survey.map((char,index)=>{
        if(choices[index]<4){
            score_set[char[0]]+=score[choices[index]-1];
        }else if(choices[index]>4){
             score_set[char[1]]+=score[choices[index]-1];
        }
    })
    char_arr.map(char=>{
        if(score_set[char[0]]===score_set[char[1]]){
            answer.push(char[0]>char[1]?char[1]:char[0]);
        }else{
            answer.push(score_set[char[0]]>score_set[char[1]]?char[0]:char[1])
        }
    })
    return answer.join("");
}