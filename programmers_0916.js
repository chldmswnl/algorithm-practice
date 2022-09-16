/**
 * 프로그래머스 level 2. JadenCase 문자열 만들기
 */

function solution(s) {
  let newArr = s.split(" ").map((v) => {
    return v.charAt(0).toUpperCase() + v.substring(1).toLowerCase();
  });

  return newArr.join(" ");
}
