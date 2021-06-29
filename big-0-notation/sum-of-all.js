function addUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}

// not stable, as machine changes/ges time chan
let t1 = performance.now();
console.log(addUpTo(6));
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);


function addUpTo1(n) {
    return (n * (n + 1)) / 2
}

let t3 = performance.now();
console.log(addUpTo1(6));
let t4 = performance.now();
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`);

function subtotals(array) {
    var subtotalArray = new Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

console.log(subtotals([2, 3, 4]));

function largest(array) {
    let max = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] > max) {
    //         max = array[i]
    //     }
    // }

    array.find(element =>
        element > max ? max = element : max
    )
    return max;
}

console.log(largest([-188, -2, 200, 3, 4]));