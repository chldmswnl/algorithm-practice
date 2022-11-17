// level 2. 파일명 정렬

function solution(files) {
    
    files.sort((a,b)=>{
        
        let aHead=a.match(/^\D+/)[0].toLowerCase();
        let bHead=b.match(/^\D+/)[0].toLowerCase();
        
        if(aHead > bHead) return 1;
        if(aHead < bHead) return -1;
      
        
        return parseInt(a.match(/\d+/)[0])-parseInt(b.match(/\d+/)[0])
      
    })
  
    return files;
}
