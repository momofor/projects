const badLetters = [",", "!"];
const string = "Hello, world!";
const removeLetter = (stringu) => {
    for (let i = 0; i < badLetters.length; i++) {
        const badLetter = badLetters[i];
        if (stringu.match(badLetter))
            stringu = stringu.replace(badLetter, "");
        else
            return "no bad letters found";
    }
    return stringu;
};
removeLetter(string);
//# sourceMappingURL=maps/removePunct.js.map