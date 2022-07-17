const caesar = function(str, shift) {

    const alph = "abcdefghijklmnopqrstuvwxyz";
    const alphBIG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    str = str.split("");

    for (let i = 0; i < str.length; i++) {
        let newLetter = "";

        if (alph.includes(str[i])) {
            newLetter = alph.at((alph.indexOf(str[i]) + shift) % 26);
            str[i] = newLetter;
        }
        else if (alphBIG.includes(str[i])) {
            newLetter = alphBIG.at((alphBIG.indexOf(str[i]) + shift) % 26);
            str[i] = newLetter;
        }
    }
    
    return str.join("");
};

// Do not edit below this line
module.exports = caesar;
