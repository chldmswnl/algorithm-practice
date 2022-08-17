/**
 * 프로그래머스 level 2. 문자열 압축
 */

function solution(s) {
  let arr = [];

  for (let i = 1; i <= s.length; i++) {
    let index = 0;
    let sentence = "";

    while (index < s.length) {
      let cnt = 1;
      while (s.slice(index, index + i) === s.slice(index + i, index + i + i)) {
        cnt += 1;
        index += i;
      }

      if (cnt > 1) {
        sentence += cnt;
      }
      sentence += s.slice(index, index + i);
      index += i;
    }
    arr.push(sentence.length);
  }

  arr.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  return arr[0];
}
