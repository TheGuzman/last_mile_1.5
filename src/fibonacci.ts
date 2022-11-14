export function returnFibonacciNumFromInt(n: number) {
  let a: number = 0;
  let b: number = 1;
  let c: number = a + b;
  for (let i = 2; i < n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
}
