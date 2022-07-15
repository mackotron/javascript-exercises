const sumAll = function(fromNum, toNum) {

    if (typeof fromNum !== "number" || typeof toNum !== "number" ||
        fromNum < 0 || toNum < 0 ) return "ERROR"

    let result = 0;
    
    if (fromNum > toNum) {
        let tempfromNum = fromNum;
        fromNum = toNum;
        toNum = tempfromNum;
    }

    for (fromNum; fromNum <= toNum; fromNum++ ) result += fromNum;

    return result;
};

// Do not edit below this line
module.exports = sumAll;
