function selectionSort1(arr) {
    let min = arr[0];
    for (i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr, arr[i], arr[j]);
            if (arr[i] > arr[j]) {
                min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        // if i is already the lowest
        // do not need to swap
        if (i !== lowest) {
            console.log(i, lowest);
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }

    }
    return arr;
}

// console.log(selectionSort([5, 3, 1, 2, 4]));
console.log(selectionSort([0, 2, 33, 22, 10, 19, 17]));

function selectionSortES5(arr) {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    for (i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        // if i is already the lowest
        // do not need to swap
        if (i !== lowest) swap(arr, i, lowest);


    }
    return arr;
}
console.log(selectionSortES5([0, 2, 33, 22, 10, 19, 17]));
