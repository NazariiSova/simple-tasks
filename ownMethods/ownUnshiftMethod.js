function ownUnshift(array, ...element) {

    for (let i = array.length-1; i >0; i--) {
        console.log(array.length);
        console.log(i);
        console.log(i--);
        console.log(array[i + element.length]);

        array[i] = array[i + element.length];

        console.log(array[i]);
    }

    const unshift = array.length;

    console.log(array);
    console.log(unshift);
};

array = ["a", "b", "c"];

element = ["d", "e"];

ownUnshift(array, element);