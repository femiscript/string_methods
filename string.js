//Strings Methods "charAt()"
//it will pick the letter of the index in the ()
//last letter will be "str.lenght - 1"
//if the index is more than the string lenght with get nothing
let str = "Hello World";
let charater1 = str.charAt(); //gives "H" same as index 0
let charater2 = str.charAt(7); //gives "o"
console.log(charater1);
console.log(charater2);

//charCodeAt() gets Unicode of letter at specific position
let str1 = "Hveryone";
let code = str1.charCodeAt(0);//gives 72
let code1 = str1.charCodeAt(3);//gives 114
console.log(code);
console.log(code1);

//concat() merging or joins two or more strings
//We can concat() as many strings
let boys = "male ";
let girls = "female";
let boyGirl = boys.concat(girls);
let all = boyGirl.concat(" ", boys, girls);
console.log(boyGirl);
console.log(all);

//constructor returns a function as below
//ƒ String() { [native code] }
let oldString = "construction company";
let construct = oldString.constructor;
console.log(construct);

console.log(String(100));//returns a string
console.log(100);//returns a number

let sample = String("sample");
let samples = new String("samples");
console.log(sample);//returns a string
console.log(samples);//return an object

//endsWith()... check if string ends with something
let text = "letter";
let text2 = text.endsWith("e"); // false
let text3 = text.endsWith("r"); // true
console.log(text2);
console.log(text3);

//startsWith()... check if string starts with something
let texted = "letter";
let tex2 = texted.startsWith("r"); // false
let tex3 = texted.startsWith("l"); // true
console.log(tex2);
console.log(tex3);

//formCharCode(); converts Unicode values to Charaters
let char = String.fromCharCode(72); //returns "H"
// We can add as many as we want
let char2 = String.fromCharCode(72, 65, 189, 200, 114);
console.log(char);
console.log(char2);

//.includes();
let stringCheck = "my name is Femi, I'm a developer";
let check = stringCheck.includes("Femi");
let check2 = stringCheck.includes("femi");
//We can alse check if it is at a position
//Femi started at index 11 so 12 returns false
let check3 = stringCheck.includes("Femi", 12);
console.log(check);//it is case sensitive
console.log(check2);// returns false
console.log(check3);// returns false

//indexOf
let indexText = "I'm Femi, who are you?";
let indexText2 = indexText.indexOf("Femi", 4);
console.log(indexText2);

//.lastIndexOf()
let lastIndex = "The almighty God, I am.";
let indexLast = lastIndex.lastIndexOf("God");
console.log(indexLast);// 13

//.lenght
let ourString = "All the things I want.";
let theLength = ourString.length;
//it will count from 0 index
console.log(theLength); // returns 22

//.localeCompare()
let strAb = "ac";
let strCd = "ca";
let strCheck = strAb.localeCompare(strCd);
console.log(strCheck);
// orderly, sorted before returns -1
//orderly, sorted after returns 1
//same returns 0

//.match()
let test = "The in SPAIN stays mainly in the play";
let matchText = test.match("found");// null, not seen
let matchTextt = test.match("ain");// index 20, array
console.log(matchText);
console.log(matchTextt);

// .prototype is used to add new properties
//and methods to existing objects

function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
}
employee.prototype.color = "black";
//We have added "color = black to femi"
// if you check femi.color in console, you will see black
const femi = new employee("Laizer", "Engineer", 1980);
console.log(femi);
console.log(femi.color);

// .repeat()
//it will repeat "Hello World"  10 times in the console
let hello = "Hello World! ";
console.log(hello.repeat(10));

// .replace()
let word = "My name is: Femi Laizer";
//replace "Femi Laizer" with "Ronke Laizer"
let words = word.replace("Femi Laizer", "Ronke Laizer");
console.log(words);
console.log(word);

//A global replacement:
let texty = "Mr Blue has a blue house and a blue car";
let resulty = texty.replace(/blue/g, "red");
console.log(texty);
console.log(resulty);

//search() searches a string for a value and returns the position of the first match:
//it shows position of the string
//"femi" - case sensitive
// /Femi/  - case sensitive
// /femi/i  - case insensitive
let built = "Mr Femi is a femi";
console.log(built.search("femi")); //13
console.log(built.search("Femi")); //3
console.log(built.search(/femi/));// 13
console.log(built.search(/femi/i)); // 3

//.slice()
// start from position 3 to the end
let cute = "every one is ready here";
let cut = cute.slice(3);
console.log(cut);
// start from positon 0 and cut up to 9 index
let cout = cute.slice(0, 9);
console.log(cout); // everyone

// .split()  .split("") .split(" ")
let holl = "we are the gods";
//.split() return all the words in as a single array index
console.log(holl.split());
// .split(" ") returns each word as array index
console.log(holl.split(" "));
// .split("") returns each letter as array index
console.log(holl.split(""));

//The substr() Method sane as substring()
//.substr() extracts a part of a string:
let teat = "Hello world!";
let res = teat.substr(2);
let resa = teat.substr(1, 4);
console.log(res);
console.log(resa);

//.toLowerCase()  .toUpperCase()
let wordString = "ALL MY LIFE";
console.log(wordString.toLowerCase());
console.log(wordString.toLocaleLowerCase());

let stringWord = "my life has changed";
console.log(stringWord.toUpperCase());
console.log(stringWord.toLocaleUpperCase());

//.toString converts to string
let helloWorld = 1459; // number
console.log(helloWorld); // number
console.log(String(helloWorld)); // stirng
console.log(helloWorld.toString()); // string

//.trim remove spaces in a string
// .trim() .trim("") .trim(" ")  same result
let spacedString = "      po la pin    ";
let trimString = spacedString.trim();
console.log(spacedString); //space included
console.log(trimString); // no space outside the string

//We can also used replace(/^\s+|\s+$/gm,'')
//to remove spaces
let replaced = spacedString.replace(/^\s+|\s+$/gm, "");
console.log(replaced);

// .valueOf()
let replace = replaced.valueOf();
console.log(replace.split(" ")); //array











