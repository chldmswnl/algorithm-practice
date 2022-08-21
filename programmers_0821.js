/**
 * 프로그래머스 level 2. 기능개발
 */

function solution(progresses, speeds) {
  var answer = [];
  let days = [];

  progresses.map((v, i) =>
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]))
  );
  while (days.length !== 0) {
    let functions = 1;
    if (days.length === 1) {
      answer.push(functions);
      days.shift();
    } else {
      let firstOne = days.shift();
      while (firstOne >= days[0]) {
        days.shift();
        functions++;
      }
      answer.push(functions);
    }
  }

  return answer;
}
