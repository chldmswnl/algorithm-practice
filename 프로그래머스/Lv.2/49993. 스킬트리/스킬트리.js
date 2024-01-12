function solution(skill, skill_trees) {
    let answer=0;
    skill_trees.map(set=>{
      const arr=[];
      let count=0;
      set.split("").map(char=>{
          if(skill.indexOf(char)>-1){
              arr.push(char);
          }
      })
        arr.map((c,index)=>{
            if(c===skill[index]) count++;
        })
        if(count===arr.length) answer++;
    })
    return answer;
}