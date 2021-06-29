// hash("pink", 9)
// index, length of array

// "a".charCodeAt(0) - 96 = 1
// "z".charCodeAt(0) - 96 = 26
// add the sum of the characters

// length
// total number % length of array

// good:
// same result whenever calling
// bad:
// only hash strings 
// not constant time - depends on the length of the key passed in - scale along the size of the input
// a bit random
function hash(key, arrLength) {
    let total = 0;
    for (let i of key) {
        let value = key.charCodeAt(i) - 96;
        total = (total + value) % arrLength;
    }
    return total;
}

// hash always takes advanrages of prime numbers
// it can spread data out
function hash(key, arrLength) {
    let total = 0;
    // less collision
    // but "pink" and "cyan" at 13 both produce 5
    let PRIME = 31;
    // reduce to be closer to constant time
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let value = key[i].charCodeAt(0) - 96;
        total = (total * PRIME + value) % arrLength;
    }
    return total;
}

// less colission
// 1. separate chaining
