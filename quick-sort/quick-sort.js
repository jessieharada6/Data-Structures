function pivotHelper1(arr, start = 0, end = arr.length - 1) {
    // [4, 8, 2, 1, 5, 7, 6, 3]
    let pivotIndex = 0;
    let pivot = arr[start];

    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            // swap the smaller value at the pivotIndex position
            let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;
        }
    }
    //  now [4, 2, 1, 3, 5, 7, 6, 8]

    let i = 1;
    while (i <= pivotIndex) {
        arr[i - 1] = arr[i];
        i++;
    }
    arr[pivotIndex] = pivot;
    // now [2, 1, 3, 4, 5, 7, 6, 8]

    return pivotIndex;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    // [4, 8, 2, 1, 5, 7, 6, 3]
    let pivotIndex = start; // here can't be 0, as start may change
    let pivot = arr[start];

    // here can't be 1, as start + 1 may change
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            pivotIndex++;
            // swap the smaller value at the pivotIndex position
            swap(arr, i, pivotIndex);
        }
    }
    //  now [4, 2, 1, 3, 5, 7, 6, 8]

    swap(arr, start, pivotIndex);
    // now [3, 2, 1, 4, 5, 7, 6, 8] as orders of smaller numbers don't matter

    return pivotIndex;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// const arr = [4, 8, 2, 1, 5, 7, 6, 3];
// console.log(pivot(arr));

function quickSort(arr, left = 0, right = arr.length - 1) {
    // base case: left === right
    // remember it' is the same array
    // it is just that pivot index keeps going closer towards each other
    // until a point where left === right
    // so we only do it if left < right so that it will not get stack overflow

    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // pivotIndex = 3 for the first time
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// // SOLUTION
// function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     // We are assuming the pivot is always the first element
//     let pivot = arr[start];
//     let swapIdx = start;

//     for (let i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++;
//             swap(arr, swapIdx, i);
//         }
//     }

//     // Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx);
//     return swapIdx;
// }


// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right) //3
//         //left
//         quickSort(arr, left, pivotIndex - 1);
//         //right
//         quickSort(arr, pivotIndex + 1, right);
//     }
//     return arr;
// }

