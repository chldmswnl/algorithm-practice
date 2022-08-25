/**
 * 프로그래머스 level 2. 124나라의 숫자
 */

function solution(n) {
  var answer = "";
  const mod = [4, 1, 2];

  while (n > 0) {
    answer = mod[n % 3] + answer;
    n = parseInt((n - 1) / 3);
  }
  return answer;
}
