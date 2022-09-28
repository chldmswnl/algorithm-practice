/**
 * 프로그래머스 level 2. 다음 큰 숫자
 */

function solution(n) {
  var answer = 0;
  let count = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;

  while (true) {
    let temp = ++n;
    let tempCount = temp
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;
    if (count === tempCount) {
      answer = temp;
      break;
    }
  }
  return answer;
}
