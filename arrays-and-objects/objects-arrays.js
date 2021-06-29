let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

console.log(Object.keys(instructor)); // O(n)
console.log(Object.values(instructor)); // O(n)
console.log(Object.entries(instructor)); // O(n)
console.log(instructor.hasOwnProperty('firstName')); //O(1)

let names = ["Michael", "Melissa", "Andrea"];

console.log(names[2]); // access O(1)

console.log(names.push("Jessie")); // add at end O(1)
console.log(names);
console.log(names.unshift("Peanut")); // add at begining O(n)
console.log(names);

console.log(names.pop("Jessie")); // remove at end O(1)
console.log(names);
console.log(names.shift("Peanut")); // remove at begining O(n)
console.log(names);

const a = names.slice();
console.log(names);
console.log(a);

console.log(names.sort());

//ascneding
// a - b > 0, switch order, < 0 keep order
console.log(
    [11, 2, 22, 1].sort((a, b) => a - b));