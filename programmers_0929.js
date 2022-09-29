/**
 * 프로그래머스 level 2. 카펫
 */

function solution(brown, yellow) {
  let total = brown + yellow;
  let width = 0;
  let height = 0;

  for (let i = total; i > 0; i--) {
    if (total % i !== 0) {
      continue;
    }

    width = i;
    height = total / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
