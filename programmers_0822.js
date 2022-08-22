/**
 * 프로그래머스 level 2. 멀쩡한 사각형
 */

function solution(w, h) {
  var answer = 1;
  let unavailableSquare = w + h - getDivider(w, h);

  return w * h - unavailableSquare;
}

function getDivider(w, h) {
  let mod = w % h;

  if (mod === 0) {
    return h;
  } else {
    return getDivider(h, mod);
  }
}
