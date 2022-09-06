/**
 * 프로그래머스 level 1. K번째 수
 */

function solution(array, commands) {
  var answer = [];
  for (let i = 0; i < commands.length; i++) {
    let c = commands[i];
    let new_arr = array.slice(c[0] - 1, c[1]).sort((a, b) => a - b);
    answer.push(new_arr[c[2] - 1]);
  }

  return answer;
}
