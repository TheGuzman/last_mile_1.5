"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnFibonacciNumFromInt = void 0;
function returnFibonacciNumFromInt(n) {
    let a = 1;
    let b = 0;
    let c = a + b;
    for (let i = 2; i < n; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
}
exports.returnFibonacciNumFromInt = returnFibonacciNumFromInt;
