const fibonacci = function(nthNumFib) {
    
    if (nthNumFib < 0) return "OOPS";
    nthNumFib = parseInt(nthNumFib);

    let fibArr = [1, 1];
    for (let i = 0; i < nthNumFib; i++){
        fibArr.push(fibArr[i] + fibArr[i + 1]);
    }

    return fibArr[nthNumFib - 1];
};

// Do not edit below this line
module.exports = fibonacci;
