/**
 * 프로그래머스 level 1. 크레인 인형뽑기게임
 */

function solution(board, moves) {
  var answer = 0;
  let stack = [];

  moves.map((v) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][v - 1] !== 0) {
        stack.push(board[i][v - 1]);
        board[i][v - 1] = 0;
        break;
      }
    }

    for (let j = 0; j < stack.length; j++) {
      if (stack[j] === stack[j + 1]) {
        stack.splice(j, 2);
        answer += 2;
        j -= 1;
      }
    }
  });
  return answer;
}
