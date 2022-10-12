// level 2. 멀리 뛰기

function solution(n) {
  let arr = [1, 2];

  for (let i = 2; i < n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1234567);
  }

  return arr[n - 1];
}
