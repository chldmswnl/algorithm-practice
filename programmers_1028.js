// level 2. 위장

function solution(clothes) {

    let m=new Map();
    let answer=0;
    
    clothes.map(clothes=>{
        let tempArr=m.get(clothes[1])?m.get(clothes[1]):[];
        tempArr.push(clothes[0]);
        m.set(clothes[1], tempArr);
    })
    
    for(clothes of m.keys()){
        let leng=m.get(clothes).length+1;
        if(!answer){
            answer=leng;
        }else{
            answer*=leng;
        }
    }

    
    return answer-1;
}
