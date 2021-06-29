// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
    if (exponent === 0) return 1;
    //if (exponent === 1) return base;
    return base * power(base, exponent - 1);
}

// 2 * power(2, 2) => 2 * 4
//     2 * power(2, 1) => 2 * 2 = 4
//          2 * power(2, 0) => 2 * 1 = 2

// console.log(power(3, 3));

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {

    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

//  num * factorial(2) = 3 * 2 * 1
//       num * factorial(1) = 2
//                 num * factorial(1) = 1

// console.log(factorial(4));

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3]));
// 1 + [2, 3] = 6
//      2 + [3] = 5
//           3

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}

// 6 + r(5) = 21
//     5 + r(4) = 15
//          4 + r(3) = 10
//              3 + r(2) = 6
//                  2 + r(1) = 3
//                      1 + r(0)

console.log(recursiveRange(6));

// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
//1 1 2 3 5 8

function fib(num) {
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    if (num === 3 || num === 4) return num - 1;

    return fib(num - 1) + fib(num - 2);
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(10));


// fib(6)
// fib (4) + fib(5) 
//           fib(5) + 3 = 3 + 3 = 6
//           fib(3)  + fib (2) = 2 + 1 = 3 
//                         