// length of string

function lengthOfString(str) {

    let data = str;
    let i = 0;
    let length = 0;

    while (data[i] !== undefined) {


        length++
        i++

    }

    return length

}

console.log(lengthOfString("kishan"));

function reverseString(str) {

    let data = str;
    let rev = "";

    for (let i = data.length - 1; i >= 0; i--) {

        rev += data[i];

    }

    return rev


}

console.log(reverseString("kishan"));

function printChar(str) {

    let data = str;

    for (let i = 0; i < data.length; i++) {

        console.log(data[i]);

    }

}

printChar("kishan")

function totalVowels(str) {

    let data = str;
    let count = 0;
    let i = 0;

    while (data[i] !== undefined) {

        let char = data[i].toLowerCase();
        if ((char >= "a" && char <= "z") && (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")) {

            count++

        }
        i++

    }

    return count


}


console.log(totalVowels("kishan"));

function totalConstants(str) {

    let data = str;
    let count = 0;
    let i = 0;

    while (data[i] !== undefined) {

        let char = data[i].toLowerCase();

        if ((char >= "a" && char <= "z") && !(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")) {

            count++

        }

        i++

    }

    return count

}

console.log(totalConstants("kishan"));

function countDigitsAlphaBetsSpecialChar(str) {

    let data = str.toLowerCase();
    if (data.length === 0) return
    let i = 0;
    let countDigi = 0;
    let countAlpha = 0;
    let countSpe = 0;

    while (data[i] !== undefined) {

        let char = data[i];

        if ((char >= "a" && char <= "z")) {

            countAlpha++

        }

        else if (char >= "0" && char <= "9") {

            countDigi++

        }

        else if (!((char >= "a" && char <= "z") && (char >= "0" && char <= "9"))) {

            countSpe++

        }

        i++

    }

    return {

        countAlpha, countDigi, countSpe

    }

}

console.log(countDigitsAlphaBetsSpecialChar("str123@$"));


function lowerCaseToUppercase(str) {

    let data = str;
    if (data.length === 0) return
    let i = 0;
    let upper = "";

    while (data[i] !== undefined) {

        let charCode = data.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) {

            upper += String.fromCharCode(charCode - 32);

        }

        else {

            upper += data[i]

        }


        i++

    }

    return upper

}

console.log(lowerCaseToUppercase("kishan Mistry"));

function uppercaseToLowerCase(str) {

    let data = str;
    if (data.length === 0) return;

    let i = 0;
    let lower = ""

    while (data[i] !== undefined) {

        let charCode = data.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {

            lower += String.fromCharCode(charCode + 32)

        }

        else {

            lower += data[i]

        }

        i++

    }

    return lower


}

console.log(uppercaseToLowerCase("kishan Mistry"));


function palidromeOrNot(str) {

    let data = str.toLowerCase();
    let isPalindrome = true;
    if (data.length === 0) return isPalindrome = false;
    let rev = "";

    for (let i = data.length - 1; i >= 0; i--) {

        rev += data[i]

    }

    return rev === data ? isPalindrome = true : isPalindrome = false

}

console.log(palidromeOrNot("mom"));


function copyOneStringToAnother(str) {

    let data1 = str;
    let data2 = "";

    for (let i = 0; i <= data1.length - 1; i++) {

        data2 += data1[i]

    }

    return data2

}

console.log(copyOneStringToAnother("kishan"));

function concatString(str1, str2) {

    let data1 = str1;
    let data2 = str2;
    let concat = "";

    for (let i = 0; i <= data1.length - 1; i++) {

        concat += data1[i]

    }

    for (let i = 0; i <= data2.length - 1; i++) {

        concat += data2[i]

    }


    return concat


}

console.log(concatString("kishan", "mayank"));

function atWithoutMethod(str, index) {

    let data = str;
    let char = ""
    if (index < 0) {

        index = data.length + index

    }

    char = data[index]

    return char

}

console.log(atWithoutMethod("kishan", -3));


function charatWithoutMethod(str, index) {

    let data = str;
    let char = "";
    if (index < 0) {

        index = data.length + index

    }

    char = data[index]

    return char

}

console.log(charatWithoutMethod("kishan", -7));

// 🧠 Step 1 – What each condition means:
// Condition	Meaning	Example
// ch !== " "	Current character is not space, means it's a letter, part of a word.	"k", "i", "s"
// inWord === false	We are not inside a word right now → means previous char was space or it's the start of string.	Before the first letter

function countWords(str) {

    let data = str;
    let inWord = false;
    let count = 0

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (char !== " " && inWord === false) {

            count++;
            inWord = true

        }

        else if (char === " ") {

            inWord = false

        }


    }

    return count

}

console.log(countWords("kishan mistry hello "));

function removeSpaces(str) {

    let data = str;
    let str1 = "";

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (char !== " ") {

            str1 += char

        }

    }

    return str1

}


console.log(removeSpaces(" Kishan Mistry "));

function replaceSpaceWithhyphen(str) {

    let data = str;
    let str1 = "";

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (char === " ") {

            str1 += "-"

        }

        else if (char !== " ") {

            str1 += data[i]

        }


    }

    return str1

}
console.log(replaceSpaceWithhyphen("kishan mistry"));


function asciiValueOfEachChar(str) {

    let data = str;
    let charCode = "";
    for (let i = 0; i < data.length; i++) {

        charCode += `${data[i]} = ${data.charCodeAt(i)}\n `;

    }

    return charCode

}

console.log(asciiValueOfEachChar(" kishan#@"));


function swapCase(str) {

    let data = str;
    let str1 = "";

    for (let i = 0; i < data.length; i++) {

        let char = data.charCodeAt(i);

        if (char >= 65 && char <= 90) {

            str1 += String.fromCharCode(char + 32)

        }

        else if (char >= 97 && char <= 122) {

            str1 += String.fromCharCode(char - 32)

        }

        else {


            str1 += data[i]

        }


    }

    return str1

}

console.log(swapCase("kishan Mistry"));


function frequencyOfEachChar(str) {

    let data = str;
    let freq = {};

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (freq[char]) {

            freq[char]++

        }

        else {


            freq[char] = 1

        }


    }

    return freq

}

console.log(frequencyOfEachChar("kishan mistry"));

function findFirstRepeatedChar(str) {

    let data = str;
    let char1 = "";
    let seen = {}

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char]) {

            char1 = char;
            break

        }

        else {

            seen[char] = 1

        }


    }

    return {

        char1, seen

    }


}

console.log(findFirstRepeatedChar("kishanmistry"));



function findFirstNonRepeatedChar(str) {

    let data = str;
    let char1 = "";
    let seen = {}

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char]) {

            seen[char]++

        }

        else {

            seen[char] = 1

        }


    }

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char] === 1) {

            char1 = char;
            break;

        }

    }


    return {

        seen, char1

    }

}

console.log(findFirstNonRepeatedChar("kishanmistryk"));


function findSecondNonRepeatedChar(str) {

    let data = str;
    let char1 = "";
    let char2 = "";
    let count = 0
    let seen = {}

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char]) {

            seen[char]++

        }

        else {

            seen[char] = 1

        }


    }

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char] === 1) {
            count++

            if (count === 1) {

                char1 = char

            }
            if (count === 2) {

                char2 = char;
                break

            }

        }

    }


    return {

        seen, char1, char2

    }

}

console.log(findSecondNonRepeatedChar("kishanmistryk"));

function removeDuplicateChar(str) {

    let data = str;
    let seen = {}
    let duplicates = [];
    let removeDuplicates = "";


    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (!seen[char]) {

            seen[char] = true;
            removeDuplicates += char

        }

        else {

            duplicates.push(char)

        }


    }


    return {

        seen, duplicates, removeDuplicates

    }




}

console.log(removeDuplicateChar("kishanmistry"));

function charAreUnique(str) {

    let data = str.toLowerCase();
    let charUnique = true;
    let seen = {}

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (!seen[char]) {

            seen[char] = true;
            charUnique = true

        }

        else {

            charUnique = false;
            break;

        }


    }

    return charUnique

}

console.log(charAreUnique("kishan"));

function comparetwoStrings(str1, str2) {

    if (str1.length !== str2.length) return false

    for (let i = 0; i < str1.length; i++) {

        if (str1[i] !== str2[i]) {

            return false

        }


    }

    return true


}

console.log(comparetwoStrings("kishan", "kishin"));

function maximumOccuringChar(str) {

    let data = str;
    let seen = {};
    let maxChar = data[0];


    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char]) {

            seen[char]++

        }

        else {

            seen[char] = 1

        }

        if (seen[char] > seen[maxChar]) {

            maxChar = char;
            break

        }


    }



    return {


        seen,
        maxChar
    }


}

console.log(maximumOccuringChar("kishanmistry"));
function minimumOccuringChar(str) {

    let data = str;
    let seen = {};
    let minchar = data[0];


    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char]) {

            seen[char]++

        }

        else {

            seen[char] = 1

        }

        if (seen[char] < seen[minchar]) {

            minchar = char;
            break

        }


    }



    return {


        seen,
        minchar
    }


}

console.log(minimumOccuringChar("kishanmistry"));

function evenOddFrequency(str) {

    let data = str;
    let seen = {};
    let evenFre = "";
    let oddFre = "";

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char]) {

            seen[char]++

        }

        else {

            seen[char] = 1

        }

        if (seen[char] % 2 === 0) {

            evenFre += `${char} = ${seen[char]}\n`

        }

        else {

            oddFre += `${char} = ${seen[char]}\n`

        }


    }


    return `even : \n${evenFre}\n  odd : \n${oddFre}  \n`


}

console.log(evenOddFrequency("kishanmistry"));


function rotateStringLeft(str, rotateBy) {

    let data = str;
    let str1 = "";

    for (let i = rotateBy; i < data.length; i++) {

        str1 += data[i]

    }

    for (let i = 0; i < rotateBy; i++) {

        str1 += data[i]

    }

    return str1

}

console.log(rotateStringLeft("kishan", 2));


function rotateStringRight(str, rotateBy) {

    let data = str;
    let str1 = "";

    for (let i = data.length - rotateBy; i < data.length; i++) {

        str1 += data[i]

    }

    for (let i = 0; i < data.length - rotateBy; i++) {

        str1 += data[i]

    }

    return str1

}

console.log(rotateStringRight("kishan", 2));

// ankish

function reverseWordInSentence(str) {

    let data = str;
    let rev = "";
    let sentence = "";

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (char !== " ") {

            rev = char + rev;
            

        }

        else {

            sentence += rev + " ";
            rev = "";

        }

    }

    sentence += rev
    return sentence

}


console.log(reverseWordInSentence(" hello kishan"));

function checkAnagram(str1, str2) {

    if (str1.length !== str2.length) return false
    let seen1 = {};
    let seen2 = {}
    let equal = true;

    for (let i = 0; i < str1.length; i++) {

        let char = str1[i];

        if (seen1[char]) {

            seen1[char]++;

        }

        else {

            seen1[char] = 1

        }


    }

    for (let i = 0; i < str2.length; i++) {

        let char = str2[i];

        if (seen2[char]) {

            seen2[char]++;

        }

        else {

            seen2[char] = 1

        }


    }

    for (let i in seen1) {

        if (seen1[i] !== seen2[i]) {

            equal = false

        }

    }

    return equal

}

console.log(checkAnagram("silent", "listrn"));




