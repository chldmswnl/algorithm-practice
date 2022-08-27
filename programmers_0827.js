/**
 * 프로그래머스 level 1. 신규 아이디 추천
 */

function solution(new_id) {
  var answer = "";

  // 1단계,2단계,3단계,4단계
  new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/gi, "")
    .replace(/[.]{2,}/gi, ".")
    .replace(/^[.]|[.]$/gi, "");

  // 5단계

  if (!new_id) {
    new_id = "a";
  }

  // 6단계
  if (new_id.length >= 16) {
    new_id = new_id.substr(0, 15).replace(/[.]$/, "");
  }

  // 7단계

  if (new_id.length < 3) {
    while (new_id.length < 3) {
      new_id += new_id[new_id.length - 1];
    }
  }

  return new_id;
}
