function insertionSortFirstTry(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

function insertionSortSecondTry(arr) {
    let i = 0;
    let j = i + 1;
    while (j < arr.length) {
        for (i = 0; i < j; i++) {
            let current = arr[i];
            if (arr[i] > arr[j]) {
                arr[i] = arr[j];
                arr[j] = current;
            }
        }
        j++;
    }
    return arr;
}

console.log(insertionSortSecondTry([5, 3, 1, 2, 4]));
console.log(insertionSortSecondTry([2, 1, 9, 76, 4]));

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            // insertion
            arr[j + 1] = arr[j];
            arr[j] = current;
        }
    }
    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));