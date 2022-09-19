"use strict";

console.clear();
// 백준 2309번 문제) 일곱 난쟁이
// 7명이 아닌 9명
// 일곱 난쟁이 키의 합은 100
// 100을 넘지 않는 자연수
// 키는 모두 다르다
// 키는 오름차순으로 출력, 일곱 난쟁이를 찾을 수 없는 경우는 없다.
// 입력 키 값 : 20 7 23 19 10 15 25 8 13
// 출력 키 값 : 7 8 10 13 19 20 23
//
/** 시나리오
 *  함수로 구현, 이중 반복문 돌리기
 *  javascript array splice()
 *  총 합 140, 결과 값 100, 차이 40(2개 값 더한 값)
 *  9개의 총합을 구하고 2개의 가짜 난쟁이 값을 빼서 100이 맞다면
 *  2개 값을 제외하고 나머지 출력
 *  얇은 복사 처리 shallow copy : 원래의 값도 바꿔버리기
 */

// 배열의 기존 요소를 삭제 또는 교체, 추가 변경하기
// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// - start : 음수이면 끝에서부터 세기
// - deleteCount : 배열에서 제거할 요소의 수
// - item : 배열에 추가할 요소(지정하지 않으면 splice() 요소 제거만 수행)

// 배열 값 합계 구하기
// reduce() 초기값 지정해줘야 에러 발생하지 않는다.
// sum 값을 지정해줌으로써 arr[0] = null으로 값이 설정된다.
// 적용방법 : array.reduce(function(누적값, 현재값, 인덱스, 배열){ return 누적값 + 현재값 }, 0);
//           array.reduce((누적값, 현재값, 인덱스, 배열) => return 결과, 초기값);
// const arrResult = arr.reduce(function add(sum, currValue) {
//   return sum + currValue;
// }, 0);
// console.log(`arr 배열값 합계는 ? ${arrResult}`);

// 키 오름차순 정렬, sort() 적용
// const arrSort = arr.sort(function (a, b) {
//   return a - b;
// // return b - a; (내림차순 정렬)
// });
// console.log(`오름차순 정렬된 arrSort 값 ? ${arrSort}`);

function solution(arr) {
  let answer = [...arr]; // 배열 값 변수에 저장
  let sum = answer.reduce((a, b) => a + b, 0); // 화살표 함수, 배열 누적 총합 구하고 변수에 저장
  console.log(sum); // 140

  for (let i = 0; i < 8; i++) {
    // i를 9개의 숫자를 반복해야 하니 8까지 돌리기
    // console.log(i);
    for (let j = i + 1; j < 9; j++) {
      // j를 i+1 한 값으로 보고 9까지 돌리기
      //   console.log(i, j);
      if (sum - (answer[i] + answer[j]) === 100) {
        // 배열 누적 총합 140에서 배열[i]와 배열[j]를 합한 것을 뺀 값이 100과 같다면
        answer.splice(j, 1); // 배열 내 특정 인덱스를 맨 뒤에서부터 제거
        answer.splice(i, 1); // 위와 동일
      }
    }
  }
  answer.sort((a, b) => a - b); // 배열 오름정렬하기
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(`결과 값은 ? ${solution(arr)}`); //  결과 값은 ? 7,8,10,13,19,20,23
