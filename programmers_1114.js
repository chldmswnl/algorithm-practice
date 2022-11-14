// level 2. 연속 부분 수열 합의 개수

function solution(elements) {
    var answer = 0;
    const m=new Set();
    let newArr=[...elements,...elements];

    for(let i=1;i<=elements.length;i++){
        for(let j=0;j<elements.length;j++){
            m.add(newArr.slice(j,j+i).reduce((a,b)=>a+b));
        }
    }
    
    return m.size;
}
