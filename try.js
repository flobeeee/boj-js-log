// Quokka 사용해서 실시간으로 보면서 하기

const input = `3
10
2
9`.trim().split('\n');

const n = Number(input[0]);
const nums = input.slice(1, n + 1).map(Number);

// 풀이
console.log(nums)