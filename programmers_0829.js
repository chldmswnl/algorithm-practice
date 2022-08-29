/**
 * 프로그래머스 level 2. 짝 지어 제거하기
 */

function solution(s) {
  let arr = s.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length === 0) {
      stack.push(arr[i]);
    } else {
      if (stack[stack.length - 1] === arr[i]) {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    }
  }

  return stack.length ? 0 : 1;
}
