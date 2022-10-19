// level 2. H-Index

function solution(citations) {
    let h=0;
    
    citations.sort((a,b)=>{return b-a});
    while(h+1<=citations[h]){
        h++;
    }
    return h;
}
