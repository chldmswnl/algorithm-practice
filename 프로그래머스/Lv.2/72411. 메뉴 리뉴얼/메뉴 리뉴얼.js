function solution(orders, course) {
    let answer = [];
    const obj={};
    let hashMap = new Map();
   function dfs(str, order) {
       
        for(let i=0;i<order.length;i++){
            const word = str+order[i];
            if (hashMap.has(word)) {
            hashMap.set(word, hashMap.get(word) + 1);
            } else {
                hashMap.set(word, 1);
            }
            dfs(word, order.slice(i+1));
        }

    }

    orders.forEach(order => {
        const arr = order.split("").sort();

        arr.forEach((char, index) => {
            dfs(char, arr.join("").slice(index + 1));
        });
    });
    const filteredMap=Array.from(hashMap).filter(([key, value]) => value>1);
    course.map(num=>{
        const courseFilteredMap=filteredMap.filter(item=>item[0].length===num).sort((a,b)=>b[1]-a[1]);
        courseFilteredMap.map(item=>{
            if(item[1]===courseFilteredMap[0][1]){
                answer.push(item[0]);
            }
        })
    })
    return answer.sort();
}