export function returnFibonacciNumFromInt(n: number) {
    let num1: number = 0;
    let num2: number = 1;
    let res: number = num1 + num2;
    for (let i = 2; i < n; i++) {
        num1 = num2;
        num2 = res;
        res = num1 + num2;
    }
    return res;
}
