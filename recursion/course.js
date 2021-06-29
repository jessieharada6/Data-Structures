function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(3));

// A. input: 3
// return 3 + sumRange (2) ===> F. 3 + 2 + 1
// B. input: 2
// return 2 + sumRange(1) ===> E. 2 + 1
// C. input: 1
// return 1 + 1, D. sumRange(1) = 1 we will not go further as it is the base case

// see the process: 

// sumRange(3)
//    return 3 + sumRange(2)
//               return 2 + sumRange(1) // END POINT
//                          return 1; 

// sumRange(3)
//    return 3 + 2 + 1
//               return 2 + 1
//                          return 1;


//Writing Factorial Iteratively
// 4! = 4 * 3 * 2 * 1
function factorialIterative(num) {
    let total = 1; //total starts at 1, based case 1! = 1
    for (let i = num; i > 1; i--) {
        total *= i;
    }

    return total
}
console.log(factorialIterative(4));

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(4));

// num = 4
// 4 * factorial(3);
//             3 * factorial(2);
//                         2 * factorial(1) (= 1) 2! = 2 * 1

// Helper Method Recursion: it is a pattern
// rather than for the varialble to float outside as a global value
// create a function to wrap it
// inside, call recursion function
function collectOddValues(arr) {
    let result = [];

    function helper(input) {
        if (input.length === 0) return;

        if (input[0] % 2 !== 0) {
            result.push(input[0])
        }

        // always slice the first element
        // keep the rest of the element
        helper(input.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));

// Pure Recursion
function collectOddValuesPure(arr) {
    let newArray = [];

    if (arr.length === 0) return newArray;
    if (arr[0] % 2 !== 0) {
        newArray.push(arr[0]);
    }

    newArray = newArray.concat(collectOddValues(arr.slice(1)));
    return newArray;
}

console.log(collectOddValuesPure([1, 2, 3, 4, 5]));