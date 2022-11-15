// level 2. 스킬트리

function solution(skill, skill_trees) {
    var answer = 0;
    let skillArr=skill.split('');
    
    skill_trees.map(tree=>{
        let index=0;
        let skillNum=0;
        let treeArr=tree.split('');
        
        skillArr.map(v=>{
            if(treeArr.includes(v)) skillNum++;
        })
  
        for(let i=0;i<treeArr.length;i++){
            if(skillArr[index]===treeArr[i]){
                index++;
            }
        }
        
        if(index===skillNum){
            answer++;
        }
    })
    return answer;
}
