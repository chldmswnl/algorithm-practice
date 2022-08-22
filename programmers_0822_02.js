/**
 * 프로그래머스 level 2. 올바른 괄호
 */

function solution(s) {
  var answer = true;
  let arr = [];

  s.split("").map((char) => {
    if (char === "(") {
      arr.push("(");
    } else if (char === ")") {
      if (arr.length === 0) {
        answer = false;
      } else {
        arr.pop();
      }
    }
  });

  if (arr.length > 0) answer = false;

  return answer;
}
