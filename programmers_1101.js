// level 2. 소수 찾기 

function isPrime(n) {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}

function solution(numbers) {
    var answer = new Set();
    let arr=numbers.split("");
    
    function getPermutation(numbersArray, fixedNumber) {
    if (numbersArray.length) {
      for (let i = 0; i < numbersArray.length; i++) {
        const temp = [...numbersArray];
        temp.splice(i, 1);

        if (isPrime(parseInt(fixedNumber + numbersArray[i]))) {
          answer.add(parseInt(fixedNumber + numbersArray[i]));
        }
        getPermutation(temp, fixedNumber + numbersArray[i]);
      }
    }
  }
    
    getPermutation(arr,'');
    return answer.size;
}

