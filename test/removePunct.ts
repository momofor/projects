const badLetters = [",", "!"];
const string = "Hello, world!";
const removeLetter = (stringu: string) => {
	for (let i = 0; i < badLetters.length; i++) {
		const badLetter = badLetters[i];
		if (stringu.match(badLetter)) stringu = stringu.replace(badLetter, "");
		else return "no bad letters found";
	}
	return stringu;
};
removeLetter(string);
