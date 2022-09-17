/**
 * 프로그래머스 level 2. 최댓값과 최솟값
 */

function solution(s) {
  var answer = "";
  let newArr = s.split(" ");

  newArr.sort((a, b) => {
    return a - b;
  });

  return `${Math.min(...newArr)} ${Math.max(...newArr)}`;
}
