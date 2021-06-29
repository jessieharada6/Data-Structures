class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    // protected method, not part of public API
    _hash(key) {
        let total = 0;
        let PRIME = 31;
        // reduce to be closer to constant time
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    // separate chaining
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    // unique
    keys() {
        let keys = new Set();
        for (let key of this.keyMap) {
            if (key) {
                for (let element of key) {
                    keys.add(element[0]);
                }
            }
        }
        return keys;
    }

    values() {
        let values = new Set();
        for (let key of this.keyMap) {
            if (key) {
                for (let element of key) {
                    values.add(element[1]);
                }
            }
        }
        return values;
    }

    // provided solution
    // keys(){
    //     let keysArr = [];
    //     for(let i = 0; i < this.keyMap.length; i++){
    //       if(this.keyMap[i]){
    //         for(let j = 0; j < this.keyMap[i].length; j++){
    //           if(!keysArr.includes(this.keyMap[i][j][0])){
    //             keysArr.push(this.keyMap[i][j][0])
    //           }
    //         }
    //       }
    //     }
    //     return keysArr;
    //   }
    //   values(){
    //     let valuesArr = [];
    //     for(let i = 0; i < this.keyMap.length; i++){
    //       if(this.keyMap[i]){
    //         for(let j = 0; j < this.keyMap[i].length; j++){
    //           if(!valuesArr.includes(this.keyMap[i][j][1])){
    //             valuesArr.push(this.keyMap[i][j][1])
    //           }
    //         }
    //       }
    //     }
    //     return valuesArr;
    //   }
}

var ht = new HashTable(17);
console.log(ht.set("maroon", "#800000"));
console.log(ht.set("yellow", "#FFFF00"));
console.log(ht.set("olive", "#808000"));
console.log(ht.set("salmon", "#FA8072"));
console.log(ht.set("lightcoral", "#F08080"));
console.log(ht.set("mediumvioletred", "#C71585"));
console.log(ht.set("plum", "#DDA0DD"));
console.log(ht.get("plum", "#DDA0DD"));
console.log(ht.get("blue", "#DDA0DD"));
console.log(ht.keys());
console.log(ht.values());





// In Javascript Object.values and Object.keys return values and keys in the order they are inserted. How can we modify your hash table implementation to get similar results?

// const obj = { "one": 1, "two": 2, "three": 3, "four": 4, "five": 5 }
// Object.values(obj)
// [1, 2, 3, 4, 5]
// Object.keys(obj)
// ["one", "two", "three", "four", "five"]