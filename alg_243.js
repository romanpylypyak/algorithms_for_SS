// Given a natural number n. Can it be represented as the sum of two squares of natural numbers? if possible then
// a) indicate a pair of x,y natural numbers where n = x ^ 2 + y ^ 2
// b) indicate all pairs of x y, where n = x^2 + y ^ 2 and x >= y

// Solution for 243a
function getRepresentedNumbers1(n) {
  // Conclusion from Fermat's theorem on sums of two squares
  if ((n - 3) % 4 === 0)
    return `Sorry, but you can't represent  number ${n} as two squares of natural numbers`;
  const arr = [];
  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (x ** 2 + y ** 2 === n) {
        arr.push([`x: ${x}`, `y: ${y}`]);
      }
    }
  }
  return arr;
}

// Solution for 243b
function getRepresentedNumbers2(n) {
  // Conclusion from Fermat's theorem on sums of two squares
  if ((n - 3) % 4 === 0)
    return `Sorry, but you can't represent  number ${n} as two squares of natural numbers`;
  const arr = [];
  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (x ** 2 + y ** 2 === n && x >= y) {
        arr.push([`x: ${x}`, `y: ${y}`]);
      }
    }
  }
  return arr;
}

console.log("243a, num 1" + getRepresentedNumbers1(1));
console.log("243a, num 5" + getRepresentedNumbers1(5));
console.log("243a, num 11" + getRepresentedNumbers1(11));
console.log("243a, num 25" + getRepresentedNumbers1(25));
console.log("243b, num 1" + getRepresentedNumbers2(1));
console.log("243b, num 5" + getRepresentedNumbers2(5));
console.log("243b, num 11" + getRepresentedNumbers2(11));
console.log("243b, num 25" + getRepresentedNumbers2(25));
