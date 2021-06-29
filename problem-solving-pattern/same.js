function same(x, y) {
    if (x.length !== y.length) return false;

    x.sort();
    y.sort();
    return x.every((value, index) => y[index] === value ** 2)
}

// console.log(same([1, 2, 3], [4, 1, 9])); //true
// console.log(same([1, 2, 3, 2], [1, 4, 4, 9])); //true
// console.log(same([1, 2, 3], [1, 9])); //false
// console.log(same([1, 2, 1], [4, 4, 1])); //false

//FREQUENCY COUNTER: for loop, object key and using the key to record number of occurences of each key
// my version
function validAnagram1(x, y) {
    if (x.length != y.length) return false;
    if (x.length === 0 && y.length === 0) return true;

    const xObj = {};
    const yObj = {};

    for (let i = 0; i < x.length; i++) {
        //xObj[x[i]] += 1 won't work, as the init value is NaN
        xObj[x[i]] = (xObj[x[i]] || 0) + 1;
    }

    for (let i = 0; i < y.length; i++) {
        yObj[y[i]] = (yObj[y[i]] || 0) + 1;
    }

    for (let key in xObj) {
        if (!(key in yObj)) return false;
        //if (key !== yObj.hasOwnProperty(key)) return false;
        if (xObj[key] !== yObj[key]) return false;
        //else return true;
    }
    return true;

}

// solution
function validAnagram(x, y) {
    if (x.length != y.length) return false;

    const xObj = {};
    for (let i = 0; i < x.length; i++) {
        let letter = x[i];
        // if letter exists, increment, otherwise set to 1
        xObj[letter] ? xObj[letter] += 1 : xObj[letter] = 1;
    }

    for (let i = 0; i < y.length; i++) {
        let letter = y[i];
        // can't find letter or letter is 0
        // !0 is true, so it goes into the if statement
        if (!xObj[letter]) return false;
        else xObj[letter] -= 1;

    }
    return true;

}

// console.log(validAnagram('', '')); //true
// console.log(validAnagram('aaz', 'zza')); //false
// console.log(validAnagram('anagram', 'nagaram')); //true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); //true

//MULTIPLE POINTER
// find first pair where the sum is 0
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    // must be inside the while loop
    // to let left and right update values
    //let sum = arr[left] + arr[right];

    // left < right avoids the same element being compared
    // e.g. 0 and 0
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0)
            return [arr[left], arr[right]];
        else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
// console.log(sumZero([-2, 0, 1, 3]));
// console.log(sumZero([-2, -1, 0, 1, 2, 3]));
// console.log(sumZero([1, 2, 3]));
// console.log(sumZero([-4, -1, 0, 1, 2, 3]));

// sorted array, count unique values, can be nagative numbers
function countUniqueValues1(arr) {
    if (arr.length === 0) return 0;

    let count = 1;
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[j] !== arr[i]) {
            count++;
            j = i;
        }
    }
    return count;
}

// leetcode way
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[j] !== arr[i]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return j + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

//SLIDING WINDOW
function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let max = 0;
    let sum = 0;

    //sum first num of numbers
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }

    max = sum;
    for (let i = num; i < arr.length; i++) {
        // substract the number before, add the new number
        sum = sum - arr[i - num] + arr[i];
        max = Math.max(sum, max);
    }

    return max;
}

//console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); //6
// console.log(maxSubarraySum([], 4)); //null


//DIVIDE and CONQUER - tremendously decrease time complexity
// e.g. searching alg - binary search, quick sort, merge sort
