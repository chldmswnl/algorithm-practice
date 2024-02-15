function solution(friends, gifts) {
    const len=friends.length;
    const giftIndexArr=new Array(len).fill(0);
    const nextMonth=new Array(len).fill(0);
    const nameMap = new Map();
    const giftTable = new Array(len).fill(0).map(_ => new Array(len).fill(0));

    friends.forEach((name, idx) => {
        nameMap.set(name, idx);
    })
    
    gifts.forEach(info => {
        const [from, to] = info.split(" ");

        giftTable[nameMap.get(from)][nameMap.get(to)]++;

        giftIndexArr[nameMap.get(from)]++;
        giftIndexArr[nameMap.get(to)]--;
    })

    for(let i=0;i<giftTable.length;i++){
        for(let j=i+1;j<giftTable[i].length;j++){
            if(i===j) continue;
            if(giftTable[i][j]>giftTable[j][i]) nextMonth[i]++;
            if(giftTable[i][j]<giftTable[j][i]) nextMonth[j]++;
            if(giftTable[i][j]===giftTable[j][i]){
                if(giftIndexArr[i]>giftIndexArr[j]) nextMonth[i]++;
                if(giftIndexArr[j]>giftIndexArr[i]) nextMonth[j]++
            }
            
        }
    };
    

    return Math.max(...nextMonth);
}