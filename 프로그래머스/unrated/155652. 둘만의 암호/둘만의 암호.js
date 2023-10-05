function solution(s, skip, index) {
    const result=[];
    const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
          'p','q','r','s','t','u','v','w','x','y','z'].filter(s=>!skip.includes(s));

    [...s].map(char=>{
      result.push(alphabet[(alphabet.indexOf(char)+index) % alphabet.length])
    })
   
    return result.join("");
}