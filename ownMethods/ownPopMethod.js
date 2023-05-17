function ownPop(array) {

    const pop = array[array.length - 1];

    array.length = array.length - 1;

    console.log(array);
    console.log(pop);

};

const array = ["a", "b", "c"]

ownPop(array);
