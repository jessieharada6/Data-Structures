// know digit ate each place
function getDigits1(num, place) {
    let digit = 0;

    for (let i = 0; i < place; i++) {
        num /= 10;
    }

    digit = Math.floor(num % 10);
    return Math.abs(digit);
}


function getDigits(num, place) {
    return Math.floor((Math.abs(num) / Math.pow(10, place))) % 10;
}

// console.log(getDigits(12345, 0)); //5
// console.log(getDigits(12345, 1)); //4
// console.log(getDigits(12345, 2)); //4
// console.log(getDigits(12345, 3)); //2
// console.log(getDigits(12345, 4)); //1
// console.log(getDigits(12345, 5)); //0

// how many times we need to run 
function digitCount1(num) {
    if (num === 0) return 1;

    let i = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        i++;
    }
    return i;
}

function digitCount(num) {
    // Math.log10(0) = -Infinity
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(12345));
// Math.log10(234) = 2.369 --- 10^2.369 = 234
// 10 to the power of how much is 234
// console.log(digitCount(234));
// console.log(digitCount(-234));
// console.log(digitCount(0));


// determine number of digits of the largest number
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

// console.log(mostDigits([1234, 56, 7]));
// console.log(mostDigits([12, 56, 72]));
// console.log(mostDigits([12, 56288423, 72]));

function radixSort(nums) {
    const maxDigits = mostDigits(nums);
    for (let k = 0; k <= maxDigits; k++) {
        // bucket - array of 10 arrays 
        let digitBuckets = Array.from({ length: 10 }, () => []);
        // in the array
        for (let i = 0; i < nums.length; i++) {
            // what is the digit at k position, starting from k = 0
            let digit = getDigits(nums[i], k);
            // at 7th bucket, put the element 3927
            digitBuckets[digit].push(nums[i]);
        }
        // at 6th time (mostDigits), [-3, 7, 56, 273, 3927, 374829]
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        // [].concat([[1], [2], [3]]) // will get [1][2][3]
        // [].concat(...[[1], [2], [3]]) // will get [1, 2, 3]
        console.log(nums);
    }

    return nums;


}

console.log(radixSort([3927, 56, 7, 37, 382, 374829, 273, -3]));
