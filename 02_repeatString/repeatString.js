const repeatString = function (str, num) {
    if (num<0){
        return 'ERROR';
    }

    let hold = '';

    for (i = 0; i < num; i++) {
        hold += str;
    }

    return hold;
};

// Do not edit below this line
module.exports = repeatString;
