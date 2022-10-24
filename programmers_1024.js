// level 2. 뉴스 클러스터링

function solution(str1, str2) {
    
    // 소문자로 변환
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    
    let arrStr1=[];
    let arrStr2=[];
    
    // 2개씩 자르고 숫자, 공백, 특수문자 제거 
    
    for(let i=0;i<str1.length-1;i++){
        let str=str1.substr(i,2);
        if(/^[a-z]+$/.test(str)){
            arrStr1.push(str);    
        }
    }
    
    for(let i=0;i<str2.length-1;i++){
        let str=str2.substr(i,2);
        if(/^[a-z]+$/.test(str)){
            arrStr2.push(str);    
        }
    }
    
    // 비교해서 중복되는 수 찾기 
    let totalLen=arrStr1.length+arrStr2.length;
    let common=0;
    let answer=0;
    
    for(let i=0;i<arrStr1.length;i++){        
        for(let j=0;j<arrStr2.length;j++){
            if(arrStr1[i]===arrStr2[j]){
                common++;
                arrStr2.splice(j,1);
                break;
            }
        }
    }
    
    if(totalLen && common){
        answer=Math.floor(((common*65536)/(totalLen-common)));
    }else if(!totalLen){
        answer=65536;
    }
   
    return answer;
}
