function solution(word) {
    let idx=0;
    const words={};
    const vowels=['A','E','I','O','U'];
 
    function dfs(str, length){
        if(length===5) return;
        vowels.map(char=>{
            const word=str+char;
            words[word]=++idx;
            dfs(word,length+1);
        })
    }
    dfs("",0);

    return words[word];
}