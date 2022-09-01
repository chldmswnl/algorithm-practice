/**
 * 프로그래머스 level 1. 실패율
 */

function solution(N, stages) {
  var answer = [];

  let personNumPerStage = new Map();
  let failureRate = new Map();
  let totalPerson = stages.length;

  stages.map((num) => {
    let personNum = personNumPerStage.get(num);
    personNumPerStage.set(num, personNum ? ++personNum : 1);
  });

  for (let i = 0; i < N; i++) {
    let failNum = personNumPerStage.get(i + 1);
    failureRate.set(i + 1, failNum ? failNum / totalPerson : 0);
    if (failNum) {
      totalPerson -= failNum;
    }
  }

  const mapToArray = Array.from(failureRate);
  mapToArray.sort((a, b) => b[1] - a[1]);
  mapToArray.map((obj) => answer.push(obj[0]));

  return answer;
}
