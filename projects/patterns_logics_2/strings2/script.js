function lengthOfString(str) {

    let data = str.toLowerCase();
    let length = 0;
    if (data.length === 0) return length = 0;
    let i = 0;

    while (data[i] !== undefined) {

        length++
        i++

    }

    return length

}

console.log(lengthOfString("kishan"));


function reverseString(str) {

    let data = str.toLowerCase();
    let rev = "";

    for (let i = data.length - 1; i >= 0; i--) {

        rev += data[i]

    }

    return rev

}



console.log(reverseString("kishan"));


function printChar(str) {

    let data = str;
    let char = ""

    for (let i = 0; i < data.length; i++) {

        char += data[i] + "\n"

    }

    return char

}

console.log(printChar("kishan"));

function totalVowelsConstants(str) {

    let data = str.toLowerCase();
    let countConstants = 0;
    let countVowels = 0;
    let countDigits = 0;
    let countSpe = 0;

    for (let i = 0; i < data.length; i++) {

        let char = data[i].toLowerCase();

        if ((char >= "a" && char <= "z") && (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")) {

            countVowels++

        }

        else if ((char >= "a" && char <= "z") && !(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")) {

            countConstants++

        }

        else if (!((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) && (char >= "0" && char <= "9")) {

            countDigits++

        }



        else if (!((char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9"))) {

            countSpe++

        }


    }

    return { countVowels, countConstants, countDigits, countSpe }


}

console.log(totalVowelsConstants("kishan123$%"));

function lowerCaseToUppercase(str) {

    let data = str;
    let upper = "";

    for (let i = 0; i < data.length; i++) {

        let charCode = data.charCodeAt(i);


        if (charCode >= 97 && charCode <= 122) {

            upper += String.fromCharCode(charCode - 32)

        }

        else {

            upper += data[i]

        }

    }

    return upper


}

console.log(lowerCaseToUppercase("kishan"));

function uppercaseToLowerCase(str) {

    let data = str;
    let lower = "";

    for (let i = 0; i < data.length; i++) {

        let charCode = data.charCodeAt(i);


        if (charCode >= 65 && charCode <= 90) {

            lower += String.fromCharCode(charCode + 32)

        }

        else {

            lower += data[i]

        }

    }

    return lower


}

console.log(uppercaseToLowerCase("Kishan"));

function palidromeOrNot(str) {

    let data = str;
    let palindrome = true;
    let rev = "";

    for (let i = data.length - 1; i >= 0; i--) {

        rev += data[i]

    }


    return rev === data ? palindrome = true : palindrome = false

}

console.log(palidromeOrNot("mom"));

function copyOneStringToAnother(str) {

    let data1 = str;
    let data2 = "";

    for (let i = 0; i < data1.length; i++) {

        data2 += data1[i]

    }

    return data2

}

console.log(copyOneStringToAnother("kishan"));

function concatString(str1, str2) {

    let data = "";
    for (let i = 0; i < str1.length; i++) {

        data += str1[i]

    }
    for (let i = 0; i < str2.length; i++) {

        data += str2[i]

    }

    return data

}

console.log(concatString("kishan", "mistry"));

function atWithoutMethod(str1, index) {

    let data = str1;

    if (index < 0) {

        index = data.length + index

    }

    return data[index]


}

console.log(atWithoutMethod("kishan", -2));


function charAtWithoutMethod(str1, index) {

    let data = str1;


    return data[index]


}

console.log(charAtWithoutMethod("kishan", 2));

function wordsCount(str) {

    let data = str;
    let inwords = false
    let count = 0;

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (char !== " " && inwords === false) {

            count++;
            inwords = true

        }

        else if (char == " ") {

            inwords = false

        }


    }

    return count


}

console.log(wordsCount(" kishan mistry  "));

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

console.log(removeSpaces("kishan mistry"));

function asciiValueOfEachChar(str) {

    let data = str;
    let str1 = ""

    for (let i = 0; i < data.length; i++) {

        let charCode = data.charCodeAt(i);
        console.log(charCode);



    }

}

asciiValueOfEachChar("kishan")


function frequencyOfEachChar(str) {

    let data = str;
    let fre = {};

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (fre[char]) {

            fre[char]++

        }

        else {

            fre[char] = 1;

        }


    }


    return fre

}

console.log(frequencyOfEachChar("kishani"));

function findFirstRepeatedChar(str) {

    let data = str;
    let fre = {};
    let char1 = ""

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (fre[char]) {

            char1 = char;
            break

        }

        else {

            fre[char] = true

        }


    }

    return char1

}


console.log(findFirstRepeatedChar("kishanmistry"));



function findSecondRepeatedChar(str) {

    let data = str;
    let fre = {};
    let char1 = ""
    let char2 = "";
    let count = 0;

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (fre[char]) {

            count++

            if (count === 1) char1 = char
            if (count === 2) {

                char2 = char;
                break

            }


        }

        else {

            fre[char] = true

        }


    }

    return {

        char1, char2

    }

}


console.log(findSecondRepeatedChar("kishanmistry"));


function findFirstNonRepeatedChar(str) {

    let data = str;
    let seen = {};
    let char1 = ""

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
            break

        }


    }

    return {

        char1, seen

    }

}

console.log(findFirstNonRepeatedChar("kishanmistryk"));



function findSecondNonRepeatedChar(str) {

    let data = str;
    let seen = {};
    let char1 = "";
    let char2 = "";
    let count = 0

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

            count++;
            if (count === 1) char1 = char
            if (count === 2) {

                char2 = char;
                break

            }

        }


    }

    return {

        char1, seen, char2

    }

}

console.log(findSecondNonRepeatedChar("kishanmistryka"));


function removeDuplicateChar(str) {

    let data = str;
    let removeDuplicates = [];
    let withoutDuplicates = "";
    let seen = {};
    let count = 0

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (!seen[char]) {

            seen[char] = true;
            withoutDuplicates += char

        }

        else {

            removeDuplicates[count] = char;
            count++

        }


    }


    return {

        removeDuplicates, withoutDuplicates

    }

}

console.log(removeDuplicateChar("kishanmistry"));


function charAreUnique(str) {

    let data = str;
    let isCharUnique = false;
    let seen = {}

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (!seen[char]) {

            seen[char] = true;
            isCharUnique = true;

        }

        else {

            isCharUnique = false;
            break

        }


    }

    return isCharUnique

}

console.log(charAreUnique("kishanmi"));


function checkAnagram(str1, str2) {

    if (str1.length !== str2.length) return false;
    let seen1 = {};
    let seen2 = {};

    for (let i = 0; i < str1.length; i++) {

        let char = str1[i];

        if (seen1[char]) {

            seen1[char]++

        }

        else {

            seen1[char] = 1

        }


    }

    for (let i = 0; i < str2.length; i++) {

        let char = str2[i];

        if (seen2[char]) {

            seen2[char]++

        }

        else {

            seen2[char] = 1

        }


    }

    for (let i in seen1) {

        if (seen1[i] !== seen2[i]) {

            return false

        }



    }

    return true

}

console.log(checkAnagram("kishan", "hkisan"));


function comparetwoStrings(str1, str2) {

    if (str1.length !== str2.length) return false

    for (let i = 0; i < str1.length; i++) {

        if (str1[i] !== str2[i]) {

            return false

        }


    }

    return true

}

console.log(comparetwoStrings("kishan", "ksihan"));

function maximumOccuringChar(str) {

    let data = str;
    let seen = {};
    let maxChar = data[0]

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





    return maxChar

}

console.log(maximumOccuringChar("kishanmistry"));

function evenOddFrequency(str) {

    let data = str;
    let even = {};
    let odd = {};
    let seen = {};

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (seen[char]) {

            seen[char]++

        }

        else {

            seen[char] = 1

        }


        if (seen[char] % 2 === 0) {

            even[char] = "even"

        }
        else {

            odd[char] = "odd"

        }


    }

    return {

        even
        , odd

    }

}

console.log(evenOddFrequency("kishanmistry"));

function rotateStringLeft(str1, rotateBy) {

    let data = str1;
    let rotate = ""

    for (let i = rotateBy; i < data.length; i++) {

        rotate += data[i]

    }
    for (let i = 0; i < rotateBy; i++) {

        rotate += data[i]

    }


    return rotate

}
console.log(rotateStringLeft("kishan", 2));



function rotateStringRight(str1, rotateBy) {

    let data = str1;
    let rotate = ""

    for (let i = data.length - rotateBy; i < data.length; i++) {

        rotate += data[i]

    }
    for (let i = 0; i < data.length - rotateBy; i++) {

        rotate += data[i]

    }


    return rotate

}
console.log(rotateStringRight("kishan", 2));

function reverseWordInSentence(str1) {

    let data = str1;
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
    sentence += rev;
    return sentence


}

console.log(reverseWordInSentence(" kishan mistry"));

function firstLetterUppercase(str) {

    let data = str;
    let count = 0;
    let rev = "";
    let inwords = false

    for (let i = 0; i < data.length; i++) {

        let char = data[i];

        if (char !== " " && inwords === false) {

            count++;
            rev += char.toUpperCase()
            inwords = true;

        }

        else if (char === " ") {

            inwords = false;
            rev += char

        }

        else {

            rev += char

        }


    }

    return {

        count, rev

    }

}

console.log(firstLetterUppercase(" kishan mistry "));

function repeat(str, repeat) {

    let data = "";
    for (let i = 0; i < repeat; i++) {

        data += str

    }

    return data

}

console.log(repeat("kishan", 3));

function startsAndendsWithSameChar(str) {

    let data = str;
    let sameChar = false

    if (data[0] === data[data.length - 1]) {

        sameChar = true

    }

    return sameChar

}
console.log(startsAndendsWithSameChar("kishanki"));

function commonChar(str1, str2) {

    let char1 = "";
    let seen1 = {};
    let seen2 = {};
    for (let i = 0; i < str1.length; i++) {

        let char = str1[i];

        if (seen1[char]) {

            seen1[char]++

        }

        else {

            seen1[char] = 1

        }


    }
    for (let i = 0; i < str2.length; i++) {

        let char = str2[i];

        if (seen2[char]) {

            seen2[char]++

        }

        else {

            seen2[char] = 1

        }


    }

    for (let i in seen1) {

        if (seen2[i]) {

            char1 += i

        }

    }

    return {

        seen1, seen2, char1

    }

}

console.log(commonChar("kishan", "smi"));




