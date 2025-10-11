function countCharactersWithoutLength(str) {

    let data = str ;
    let length = 0 ;
    let i = 0 ;


    while(data[i] !== undefined ) {

        length++
        i++

    }

    return length


}

console.log(countCharactersWithoutLength("kishan"));

function countVowels(str) {

    let data = str ;
    let count = 0 ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        let char = data[i].toLowerCase() ;
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {

            count++

        }

        i++

    }

    return count


}

console.log(countVowels("kishan"));

function countConstants(str) {

    let data = str ;
    let count = 0 ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        let char = data[i].toLowerCase() ;
        if(  (char >= "a" && char <= "z" ) && !(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") ) {

            count++

        }

        i++

    }

    return count


}

console.log(countConstants("kishan"));

function countDigits(str) {

    let data = str ;
    let digit = 0 ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(char >= "0" && char <= "9" ) {

            digit++

        }

        i++

    }

    return digit

}

console.log(countDigits("kishan312"));

function countSpecialChar(str) {

    let data = str ;
    let specialChar = 0 ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(!((char >= "0" && char <= "9") || (char >= "a" && char <= "z" ) || (char >= "A" && char <= "Z" ) ) ) {

            specialChar++

        }

        i++

    }

    return specialChar

}

console.log(countSpecialChar("kishan312@/"));

function convertLowerCasetoUppercase(str) {

    let data = str ;
    let upperCaseString = "" ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        
        let charCode = data.charCodeAt(i) ;
        if(charCode >= 97 && charCode <= 122 ) {

            upperCaseString += String.fromCharCode(charCode - 32 ) ;

        }
        else {

            upperCaseString += data[i] 

        }
    
        i++

    }

    return upperCaseString

}

console.log(convertLowerCasetoUppercase("kishanHero"));

function convertUpperCasetoLowerase(str) {

    let data = str ;
    let lowerCaseString = "" ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        
        let charCode = data.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90 ) {

            lowerCaseString += String.fromCharCode(charCode + 32 ) ;

        }
        else {

            lowerCaseString += data[i] 

        }
    
        i++

    }

    return lowerCaseString

}

console.log(convertUpperCasetoLowerase("KISMI"));

function reverseString(str) {

    let data = str ;
    let reverseStr = "" ;

    for(let i= data.length - 1; i>=0 ; i-- ) {

        reverseStr += data[i] ;

    }
    
    return reverseStr

}


console.log(reverseString("kishan"));


function palindrome(str) {

    let data = str ;
    let reverseStr = "" ;

    for(let i= data.length - 1; i>=0 ; i-- ) {

        reverseStr += data[i] ;

    }
    
    return reverseStr === data ? "palindrome" : "no palindrome"

}


console.log(palindrome("mom"));

function removespaces(str) {

    let data = str ;
    let removespaceStr = "" ;
    let i=0 ;

    while(data[i] !== undefined ) {

        let char = data[i] ;
        if(char !== " " ) {

            removespaceStr += char

        }

        i++

    }
    
    return removespaceStr


}

console.log(removespaces("k i s h a n"));


function countWords(str) {

    let data = str ;
    let countWords = 0 ;
    let inwords = false 

    let i = 0 ;

    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(char !== " " && !inwords ) {

            countWords++ ;
            inwords = true

        }

        else if(char === " ") {

            inwords = false

        }
        
        i++

    }

    return countWords


}


console.log(countWords(" i love you  baby "));

function frequencyOfChar(str) {

    let data = str ;
    let seen = {} ;
    let i=0 ;


    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(seen[char]) {

            seen[char]++

        }

        else {

            seen[char] = 1 

        }

        i++

    }

    return seen

}

console.log(frequencyOfChar("kishanmistry"));

function removeDuplicates(str) {

    let data = str ;
    let i = 0;
    let removeDuplicatesStr = "" ;
    let seen = {} ;

    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(!seen[char]) {

            seen[char] = true ;
            removeDuplicatesStr += char

        }


        i++


    }

    return removeDuplicatesStr

}

console.log(removeDuplicates("banana"));

function swapCase(str) {

    let data = str ;
    let i= 0 ;
    let swapString = "" ;

    while(data[i] !== undefined ) {

        let charcode = data.charCodeAt(i) ;

        if(charcode >= 65 && charcode <= 90 ) swapString += String.fromCharCode(charcode + 32) ;
        if(charcode >= 97 && charcode <= 122 ) swapString += String.fromCharCode(charcode - 32) ;

        i++

    }

    return swapString

}

console.log(swapCase("Kishan"));

function replaceSpaceWithThing(str) {

    let data = str ;
    let i = 0 ;
    let replaceSpace = "" ;

    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(char === " ") {

            replaceSpace += "-" ;

        }

        else {

            replaceSpace += char

        }

        i++

    }

    return replaceSpace

}

console.log(replaceSpaceWithThing("kishan mistry"));

function rotateStringLeft(str,rotateBy) {

    let data = str ;
    let rotateStr = "" ;

    for(let i=rotateBy; i< data.length; i++ ) {

        rotateStr += data[i] ;

    }
        

    for(let i=0; i< rotateBy; i++  ) {

        rotateStr += data[i] ;

    }

    return rotateStr

}

console.log(rotateStringLeft("kishan", 2 ));

function rotateStringRight(str,rotateBy) {

    let data = str ;
    let rotateStr = "" ;

    for(let i=data.length - rotateBy ; i< data.length; i++ ) {

        rotateStr += data[i] ;

    }
        

    for(let i=0; i< data.length - rotateBy; i++  ) {

        rotateStr += data[i] ;

    }

    return rotateStr

}

console.log(rotateStringRight("kishan", 2 ));


// reverse words

function reverseCharInWords(str) {

    let data = str ;
    let rev = "" ;
    let result = "" ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(char !== " ") {

            rev = char + rev ;

        }

        else {

            result += rev + " " ;
            rev = "" ;

        }

        i++

    }

    result += rev

    return result

}

console.log(reverseCharInWords("i love kishan"));

function compareStrings(str1,str2) {

    let equal = true ;

    if(str1.length !== str2.length ) equal = false ;
    else {

        for(let i=0; i<= str1.length - 1 ; i++  ) {

            if(str1[i] !== str2[i]) {

                equal = false
                break

            }


        }

    }

    return equal

}

console.log(compareStrings("kishrn","kishan"));


function alphaBetsCheck(str) {

    let data = str ;
    let result = true ;
    let i = 0 ;

    while(data[i] !== undefined ) {

        let char = data[i] ;

        if(!((char >= "a" && char <= "z" ) || (char >= "A" && char <= "Z" ) )) {

            result = false;
            break

        }

        i++

    }

    return result


}

console.log(alphaBetsCheck("kishan01"));

function checkAnagram(str1,str2) {

    let equal = true ;
    let freq1 = {} ;
    let freq2 = {} ;

    if(str1.length !== str2.length) {

        equal = false

    }

    else {

   
        let i = 0 ;

        while(str1[i] !== undefined ) {

            let char = str1[i] ;
            if(freq1[char]) {

                freq1[char]++

            }

            else {

                freq1[char] = 1 ;

            }

            i++

        }

        let j = 0 ;

        while(str2[j] !== undefined ) {

            let char = str2[j] ;
            if(freq2[char]) {

                freq2[char]++

            }

            else {

                freq2[char] = 1 ;

            }

            j++

        }
    
    

    }

   for(let key in freq1) {

    if(freq1[key] !== freq2[key]) {

        equal = false
        break

    }

   }
    

   return equal

}

console.log(checkAnagram("silent","listen"));



