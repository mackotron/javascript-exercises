const caesar = function(str, shift) {

    const alph = "abcdefghijklmnopqrstuvwxyz";
    const alphBIG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    String.prototype.replaceLetter = function(index, replaceLetter){
        return this.
    } 

    for (let i = 0; i < str.length; i++) {
        let newLetter = "";

        if (alph.includes(str[i])) {
            newLetter = alph.at((alph.indexOf(str[i]) + shift) % 26);
            str = str.(str.indexOf(str[i]), newLetter);
        }
        else if (alphBIG.includes(str[i])) {
            newLetter = alphBIG.at((alphBIG.indexOf(str[i]) + shift) % 26);
            str = str.(str.indexOf(str[i]), newLetter);
        }
    }
    return str;
};

// Do not edit below this line
module.exports = caesar;
