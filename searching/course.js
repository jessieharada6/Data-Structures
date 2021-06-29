function linearSearch(arr, num) {
    // behind the scene
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num)
            return i;

    }
    return -1;

    // return arr.indexOf(num);

}

// console.log(linearSearch([2, 3, 4], 7));
// console.log(linearSearch([10, 15, 20, 1, 2], 15));

function binarySearchI(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);
        if (arr[pivot] === num) return pivot;

        if (arr[pivot] < num) {
            left++;
        }
        else if (arr[pivot] > num) {
            right--;
        }

    }
    return -1;
}

function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== num && start <= end) {
        if (arr[middle] < num) start = middle + 1;
        else end = middle - 1;

        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === num ? middle : -1;
}

// console.=narySearch([1, 2, 3, 4, 5], 1));
// console.log(binarySearch([1, 2, 3, 4, 5], 2));
// console.log(binarySearch([1, 2, 3, 4, 5], 3));
// console.log(binarySearch([1, 2, 3, 4, 5], 5));
// console.log(binarySearch([1, 2, 3, 4, 5], 6));

function naiveStringSearch(long, short) {
    let count = 0;
    let j = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            // if (long[i] !== short[j]) break;
            // else i++;

            // a better way for the if else
            // i (base) + j loops the substring
            // index of j and (i + j) move ahead together
            if (short[j] !== long[i + j]) break;

            // if we know the loop ends without break
            // j reached the last character of the string
            if (j === short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveStringSearch("wowomgzomg", "omg"));
console.log(naiveStringSearch("wowearzearccearrr", "ear"));
console.log(naiveStringSearch("lorie loled", "lol"));