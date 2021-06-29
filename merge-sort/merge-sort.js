function merge1(arr1, arr2) {
    const arr = [];

    let i = 0;
    let j = 0;
    while (arr.length < (arr1.length + arr2.length)) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++
        }

        if (i >= arr1.length && j < arr2.length) {
            arr.push(arr2[j]);
            j++;
        }

        if (j >= arr2.length && i < arr1.length) {
            arr.push(arr2[i]);
            i++;
        }
    }

    return arr;
}

function merge(arr1, arr2) {
    const arr = [];

    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++
        }
    }

    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++;
    }

    return arr;
}

console.log(merge([1, 10, 150], [2, 14, 99, 100]));

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); // [0, mid)
    let right = mergeSort(arr.slice(mid)); // [mid, end + 1)
    return merge(left, right);
}

console.log(mergeSort([150, 2, 10, 14, 1, 100, 99]));

