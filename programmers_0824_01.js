/**
 * 프로그래머스 level 1. 소수 만들기
 */

function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        if (isPrime(nums[i] + nums[j] + nums[z])) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
