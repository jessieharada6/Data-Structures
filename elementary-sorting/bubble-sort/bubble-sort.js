
bubbleSort1 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - 1 - i; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            // within j iteration
            // it bubbles the largest value of the current iteration

            // j + 1 would be undefined when it goes out of the loops
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

// console.log(bubbleSort1([5, 3, 4, 1, 2]));

bubbleSort = function (arr) {
    for (let i = arr.length; i > 0; i--) {
        for (j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            // within j iteration
            // it bubbles the largest value of the current iteration

            // j + 1 would be undefined when it goes out of the loops
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

// console.log(bubbleSort([5, 3, 4, 1, 2]));

bubbleSort2 = function (arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1])
                swap(arr, j, j + 1);
        }
    }
    return arr;
}


bubbleSortOptimised = function (arr) {
    let swap;
    for (let i = arr.length; i > 0; i--) {
        swap = true;
        for (j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swap = false;
            }
        }
        if (swap) break;
    }

    return arr;
}

console.log(bubbleSortOptimised([5, 1, 2, 3, 4]));