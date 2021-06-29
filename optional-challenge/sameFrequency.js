function sameFrequency(x, y) {
    const stringX = String(x);
    const stringY = String(y);

    if (stringX.length !== stringY.length) return false;

    // record frequency in a project
    let frequency = {};
    for (let i = 0; i < stringX.length; i++) {
        let digit = stringX[i];
        frequency[digit] = (frequency[digit] || 0) + 1;
        //frequency[digit] ? frequency[digit]++ : frequency[digit] = 1;
    }

    // compare the other string with the object
    for (let i = 0; i < stringY.length; i++) {
        let digit = stringY[i];
        // if there is no such value at all
        // {1: 1, 2: 1, 8: 1}
        // value is : => 1
        if (!frequency[digit]) return false;
        else frequency[digit] -= 1;
    }
    return true;
}

// console.log(sameFrequency(182, 821));
// console.log(sameFrequency(182, 18));
// console.log(sameFrequency(25823, 32592));
// console.log(sameFrequency(25823, 82325));

function areThereDuplicates(...elements) {
    let obj = {};
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        obj[element] ? obj[element]++ : obj[element] = 1;
    }

    for (let key in obj) {
        if (obj[key] > 1) return true;
    }
    return false;
}

// console.log(areThereDuplicates(1, 2, 3)); //false
// console.log(areThereDuplicates(1, 2, 2)); //true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true

function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let pair = (arr[left] + arr[right]) / 2;
        if (pair === target) return true;

        if (pair < target) left++;
        else right--;
    }

    return false;

}

// console.log(averagePair([1, 2, 3], 2.5)); //true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));//false
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12], 8));//true
// console.log(averagePair([], 4)); //false


function isSubsequence(first, second) {
    let firstP = 0;
    let secondP = 0;

    while (secondP < second.length) {
        //if () {
        //  a++
        //  b++
        //} else {
        //    b++
        //}
        // it is the same as ---
        // if () a++
        // b++
        if (first[firstP] === second[secondP])
            firstP++;
        secondP++;
        if (firstP === first.length - 1 || secondP === second.length - 1) break;
    }
    return firstP === first.length - 1 ? true : false;

}

// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
// console.log(isSubsequence('abc', 'acb'));

function isSubsequenceSolutionVersion(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}

function maxSubarraySum(arr, target) {
    if (arr.length < target) return null;
    let sum = 0;
    let max = 0;

    for (let i = 0; i < target; i++) {
        sum += arr[i];
    }
    max = sum;

    for (let i = target; i < arr.length; i++) {
        sum = sum - arr[i - target] + arr[i];
        max = Math.max(sum, max);
    }
    return max;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5
// console.log(maxSubarraySum([2, 3,], 3));

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
        }
        else if (total >= sum) {
            minLen = Math.min(end - start, minLen);
            total -= nums[start];
            start++;
        }
        else break;
    }

    return minLen === Infinity ? 0 : minLen;
}


console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([4, 3], 7));
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
// console.log(minSubArrayLen([3, 1, 7, 1, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 3, 1], 6));
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));