function solution(s, n) {
    var answer = [];
    s.split("").map((char,index)=>{
        if(char===" "){
            answer.push(" ");
        };
        if(char.charCodeAt()>=65 && char.charCodeAt()<=90){
            answer.push(char.charCodeAt() + n > 90 ? String.fromCodePoint(char.charCodeAt() + n - 90 + 64):String.fromCodePoint(char.charCodeAt() + n))
        }else if(char.charCodeAt()>=97 && char.charCodeAt()<=122){
            answer.push(char.charCodeAt() + n > 122 ? String.fromCodePoint(char.charCodeAt() + n - 122 + 96):String.fromCodePoint(char.charCodeAt() + n))
        }

    })

    return answer.join("");
}