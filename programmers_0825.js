/**
 * 프로그래머스 level 2. 두 큐 합 같게 만들기
 */

function solution(queue1, queue2) {
  let totalArr = [...queue1, ...queue2];
  let MaxCount = totalArr.length * 2;
  let start = 0;
  let end = queue1.length;
  const sum = (arr) => arr.reduce((a, b) => a + b);
  let totalNum = sum(totalArr.slice(start, end));
  let goalNum = sum(totalArr) / 2;
  let count = 0;

  while (count <= MaxCount) {
    if (totalNum < goalNum) {
      totalNum += totalArr[end];
      end++;
      // if(end!==totalArr.length){
      //     end++;
      // }
    } else if (totalNum > goalNum) {
      totalNum -= totalArr[start];
      start++;
      // if(start!==totalArr.length){
      //     start++;
      // }
    } else if (totalNum === goalNum) {
      return count;
    }
    count++;
  }

  return -1;
}
