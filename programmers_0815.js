/**
 * 프로그래머스 level 1. 숫자 문자열과 영단어
 */

function solution(s) {
  let enWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    let foundIndex = s.search(enWords[i]);
    if (foundIndex !== -1) {
      s = s.replace(new RegExp(`${enWords[i]}`, "g"), i);
    }
  }
  return parseInt(s);
}
