const palindromes = function (str) {
    return str.split(/[ ,.!]/g).join("").toLowerCase() ===
        str.split(/[ ,.!]/g).join("").split("").reverse().join("").toLowerCase()

};

// Do not edit below this line
module.exports = palindromes;
