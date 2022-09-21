/**
 * 프로그래머스 level 2. 숫자의 표현
 */

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n / 2; i++) {
    let count = 0;
    let j = i;
    while (j <= Math.ceil(n / 2)) {
      count += j;
      j++;
      if (count === n) {
        answer++;
        break;
      } else if (count > n) {
        break;
      }
    }
  }
  answer++;
  return answer;
}
