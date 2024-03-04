const reverseString = function(entry) {
    const newString = [];
    let i = entry.length;

    while (i > 0) {
        newString.push(entry[i - 1]);
        i--;
    }

    return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
