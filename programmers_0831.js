/**
 * 프로그래머스 level 2. 키패드 누르기
 */

function solution(numbers, hand) {
  const keypad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };
  let answer = "";
  let rightHand = "#";
  let leftHand = "*";

  function rightTo(num) {
    answer += "R";
    rightHand = num;
  }
  function leftTo(num) {
    answer += "L";
    leftHand = num;
  }

  function getDistance(currentLocation, enteredNum) {
    return (
      Math.abs(currentLocation[0] - enteredNum[0]) +
      Math.abs(currentLocation[1] - enteredNum[1])
    );
  }

  numbers.map((v) => {
    if (v % 3 === 0 && v !== 0) {
      rightTo(v);
    } else if (v % 3 === 1) {
      leftTo(v);
    } else {
      let rightDistance = getDistance(keypad[rightHand], keypad[v]);
      let leftDistance = getDistance(keypad[leftHand], keypad[v]);

      if (leftDistance > rightDistance) {
        rightTo(v);
      } else if (leftDistance < rightDistance) {
        leftTo(v);
      } else if (leftDistance === rightDistance) {
        hand === "right" ? rightTo(v) : leftTo(v);
      }
    }
  });
  return answer;
}
