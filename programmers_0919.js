/**
 * 프로그래머스 level 2. 이진변환 반복하기
 */

function solution(s) {
  let zeroNum = 0;
  let count = 0;

  while (s !== "1") {
    s = s.split("").filter((v) => {
      if (v !== "0") {
        return true;
      } else {
        zeroNum++;
      }
    });
    s = s.length.toString(2);
    count++;
  }

  return [count, zeroNum];
}
