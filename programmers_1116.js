// level 2. 가장 큰 수

function solution(numbers) {
    numbers.sort((a,b)=>{
        return (b.toString()+a.toString())-(a.toString()+b.toString());
    })
    return numbers[0]===0?'0':numbers.join('');
}
