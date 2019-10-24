// Given an integer m,  which is greater than 1 (m>1). Get a biggest integer k, for which following expression 4^k < m,  will be true

// Solution 1
function getBiggestNumber1(m) {
  let k = 0;
  do {
    m = m / 4;
    k++;
  } while (m > 4);
  return k;
}
// Solution 2
function getBiggestNumber2(m) {
  if (m < 4 ** 2) return 1;
  return Math.floor(Math.log(m - 1) / Math.log(4));
}

console.log(
  `Solution1: for 2, the biggest integer would be ${getBiggestNumber1(2)}`
);
console.log(
  `Solution2: for 2, the biggest integer would be ${getBiggestNumber2(2)}`
);
console.log(
  `Solution1: for 15, the biggest integer would be ${getBiggestNumber1(15)}`
);
console.log(
  `Solution2: for 15, the biggest integer would be ${getBiggestNumber2(15)}`
);
console.log(
  `Solution1: for 16, the biggest integer would be ${getBiggestNumber1(16)}`
);
console.log(
  `Solution2: for 16, the biggest integer would be ${getBiggestNumber2(16)}`
);
console.log(
  `Solution1: for 17, the biggest integer would be ${getBiggestNumber1(17)}`
);
console.log(
  `Solution2: for 17, the biggest integer would be ${getBiggestNumber2(17)}`
);
