function solution(wallpaper) {
    var answer = [];
    let minX=null;
    let minY=null;
    let maxX=0;
    let maxY=0;
    
    wallpaper.map((row,rowIdx)=>{
        [...row].map((item,itemIdx)=>{
            if(item==="#"){
            
                if(typeof minX!=="number") minX=rowIdx;
                if(typeof minY!=="number") minY=itemIdx;
                
                minX=Math.min(minX, rowIdx);
                minY=Math.min(minY, itemIdx);
                maxX=Math.max(maxX, rowIdx);
                maxY=Math.max(maxY, itemIdx);
            }
        })
    })
    return [minX, minY, maxX+1, maxY+1];
}