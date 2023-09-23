function solution(name, yearning, photo) {
    const obj={};
    let result=[];
    name.map((person, idx)=> obj[person]=yearning[idx]);
    
    photo.map(arr=>{
        let count=0;
        arr.map(name=>{if(obj[name]) count+=obj[name]})
        result.push(count);
    })
    return result;
}
