function solution(friends, gifts) {
    const giftIndexArr=new Array(friends.length).fill(0);
    const exchangeHistory=new Array(friends.length).fill(new Array(friends.length).fill(0));
    gifts.map(gift=>{
        const arr=gift.split(" ");
        const sender=arr[0];
        const receiver=arr[1];
        const senderIndex=friends.indexOf(sender);
        const receiverIndex=friends.indexOf(receiver);
        console.log(senderIndex, receiverIndex, exchangeHistory)
        exchangeHistory[senderIndex][receiverIndex]++;
        
        console.log(exchangeHistory[0])
        giftIndexArr[senderIndex]++;
        giftIndexArr[receiverIndex]--;
    })
  
    return [];
}