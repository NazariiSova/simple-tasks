const ownSlice = (array, start, end) => {
    let a = array[0];
    let b = array.length;
    let c = 0;
    let result = [];
    if (start > 0) {
        a = start;
    };
    if (end > 0) {
        b = end
    };

    if (start < 0) {
        a = array.length + start
    };
    if (end < 0) {
        b = array.length + end
    };

    for (let i = a; i < b; i++) {
        result[c] = array[i];
        c++
    };
    console.log(result)
};

const array = ["a", "b", "c", 1, 4, "d", "e"];

ownSlice(array, 2);
ownSlice(array, -2);
ownSlice(array, 1, 3);
ownSlice(array, 2, -1);
ownSlice(array, -4, -2);


    // let result = [];
    // const might = num;
    // if (a === undefined && num > 0) {
    //     for (let i = 0; i < array.length; i++) {
    //         result[i] = array[num];
    //         num++;
    //     };
    //     result.length = array.length - might;
    //     console.log(result);
    // } else if (a < 0 && num >0) {
    //     for (let i = 0; i < array.length; i++) {
    //         result[i] = array[num];
    //         num++;
    //     };
    //     result.length = array.length - might + a;
    //     console.log(result);
    // } else if (a > 0) {

    //     for (let i = 0; i < a; i++) {
    //         result[i] = array[num];
    //         num++;

    //     };
    //     const forSubtraction = array.length - result.length;
    //     result.length = array.length - forSubtraction;
    //     console.log(result);
    // } else if (a < 0 && num < 0) {
    //     console.log("I`m heme");
    //     let i = array.length + a
    //     for (let i; i < array.length + num; i++) {
    //         let c = 0;
    //         result[c] = array[i];
    //         c++;

    //     };
    //     const forSubtraction = array.length - result.length;
    //     result.length = array.length - forSubtraction;
    //     console.log(result);
    // } else {
    //     let i = 0;
    //     for (i; i < array.length; i++) {
    //         result[i] = array[array.length + num];
    //         num++;
    //     }
    //     result.length = array.length - num;
    //     console.log(result);

    // };