const palindromes = function (word) {
    word = word.replace(/[^\w\']|_/g, "")
        .replace(/\s+/g, " ");
    return word.split('').reverse().join('').toLowerCase() === word.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
