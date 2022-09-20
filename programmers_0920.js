/**
 * 프로그래머스 level 2. 최솟값 만들기
 */

function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => {
    return a - b;
  });
  B.sort((a, b) => {
    return b - a;
  });

  A.map((v, i) => {
    answer += A[i] * B[i];
  });

  return answer;
}
