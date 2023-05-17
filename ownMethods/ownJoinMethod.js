function ownJoin(array, separator=",") {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (i === array.length-1) {
            result += array[i];
        } else {
            result += array[i] + separator;
        };


    };
    console.log(result);
};
const array = ["a", "b", "c"];

ownJoin(array, "-");
ownJoin(array, " ");

ownJoin(array, "");
ownJoin(array);


