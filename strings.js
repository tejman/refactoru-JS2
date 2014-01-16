var word = prompt("Enter a word: ");

alert(
	"You entered: " + word + "\n" +
	"There are " + word.length + " characters in the word." + "\n" +
	"The third character is " + "'" + word.charAt(2) + "'" + "\n" +
	"Lowercase: " + word.toLowerCase() + "\n" +
	"Uppercase: " + word.toUpperCase() + "\n" +
	"Example: Here is " + word + " in a sentence." + "\n" +
	"Subword: " + word.substring(1,4)
);

