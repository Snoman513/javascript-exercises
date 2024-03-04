const removeFromArray = (arr, ...removalValues) => {
    const newArray = arr.filter(rmVal => !removalValues.includes(rmVal));

    return newArray;
}
    

// Do not edit below this line
module.exports = removeFromArray;
