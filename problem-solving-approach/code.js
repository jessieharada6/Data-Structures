function countChar(str) {
    // let result = [...str].reduce((acc, cur) => {
    //     acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    //     return acc
    // }, {});


    const result = [...str].reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    return result

}

console.log(countChar('dsabd'));
