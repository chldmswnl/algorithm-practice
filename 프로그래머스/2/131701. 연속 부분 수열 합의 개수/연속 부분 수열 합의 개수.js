function solution(elements) {
    const newArr=[...elements,...elements];
    const m=new Map();
    for(let i=1;i<=elements.length;i++){
        elements.map((ele, index)=>{
            const parsedArr=newArr.slice(index,index+i);
            const total=parsedArr.reduce((a,b)=>a+b);
            m.set(total);
            
        })
    }
    return m.size;
}