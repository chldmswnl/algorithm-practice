function solution(today, terms, privacies) {
    var answer = [];
    const termsObj={};
    const todayArr=today.split('.');
    const todayAmount=(Number(todayArr[0])*12*28)+(Number(todayArr[1])*28)+(Number(todayArr[2]));
    terms.map(term=>{
        const termArr=term.split(" ");
        termsObj[termArr[0]]=termArr[1];
    })
    
    privacies.map((privacy,index)=>{
        const privacyArr=privacy.split(" ");
        const date=privacyArr[0].split(".");
        let year=Number(date[0]);
        let month=Number(date[1])+Number(termsObj[privacyArr[1]]);
        let days=Number(date[2]);
        
        if(days===1){--month; days=28}else{--days};
        if(month>12){++year; month-=12}
        console.log(year, month, days)
        const dateAmount=(year*12*28)+(month*28)+(days);
        
     
        if(dateAmount<todayAmount) answer.push(index+1);
      
    })
    return answer;
}