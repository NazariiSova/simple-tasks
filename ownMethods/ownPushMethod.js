function ownPush(array, element) {


    array[array.length] = element;
    const push = array.length;

    console.log(array);
    console.log(push);
};

array = ["a", "b", "c"];
element = "d";

ownPush(array, element);