function solution(nums) {
    const numArr=[];
    const maxNum=nums.length/2;
    nums.map(num=>{
        if(!numArr.includes(num)){
            numArr.push(num)
        }
    })
 
    return maxNum>=numArr.length?numArr.length:maxNum;
}