const message = 'this is sparta'

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
};


function allTwist(words) {
    return words.split('').reverse().join('');
};


function formatMessange(message, callback) {
    const result = callback(message);
    console.log(result);

};

formatMessange(message, capitalize);
formatMessange(message, allTwist);