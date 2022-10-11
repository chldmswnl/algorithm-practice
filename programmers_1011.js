// level 1. 핸드폰 번호 가리기

function solution(phone_number) {
  return (
    phone_number.substring(0, phone_number.length - 4).replace(/[0-9]/g, "*") +
    phone_number.substr(phone_number.length - 4)
  );
}
