/**
 * 프로그래머스 level 2. 피보나치 수
 */

function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push((arr[i - 1] + arr[i - 2]) % 1234567);
  }

  return arr[n];
}
