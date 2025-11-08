function printNo(no) {

    let num = no;
    let rev = 0;

    while (num > 0) {

        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10)

    }

    while (rev > 0) {

        let digit = rev % 10;
        console.log(digit);
        rev = Math.floor(rev / 10);


    }


}

printNo(123);


function noIsEvnOdd(no) {

    let num = no;

    if (num % 2 === 0) {

        return `${num} is even `

    }

    else {

        return `${num} is odd `

    }


}

console.log(noIsEvnOdd(23));

function noIsEvnOdd2(no) {

    let num = no;
    let evenNo = [];
    let oddNo = [];


    while (num > 0) {

        let digit = num % 10;
        digit % 2 === 0 ? evenNo[evenNo.length] = digit : oddNo[oddNo.length] = digit;
        num = Math.floor(num / 10)

    }

    return {

        oddNo, evenNo

    }

}

console.log(noIsEvnOdd2(2345));

function firstevenoddNSum(no) {

    let num = no;
    let evenSum = 0
    let oddSum = 0

    for (let i = 1; i <= num; i++) {

        evenSum += 2 * i

    }

    for (let i = 1; i <= num; i++) {

        oddSum += 2 * i - 1

    }

    return {

        evenSum, oddSum

    }

}

console.log(firstevenoddNSum(5));


function evenOddNo(no) {

    let num = no;
    let evenNo = {};
    let oddNo = {};
    let count = 0;

    for (let i = 1; i <= num; i++) {

        if (i % 2 === 0) {

            evenNo[`evenNo${count++}`] = i

        }

        else {

            oddNo[`oddNo${count++}`] = i

        }

    }

    return { evenNo, oddNo }


}

console.log(evenOddNo(5));


function sumOfDigit(no) {

    let num = no;

    if (num === 0) return 0
    let sum = 0;

    while (num > 0) {

        let digit = num % 10;
        sum += digit;
        num = Math.floor(num / 10)

    }

    return sum

}

console.log(sumOfDigit(123));


function productsOfDigit(no) {

    let num = no;
    if (num === 0) return 0
    let multi = 1;

    while (num > 0) {

        let digit = num % 10;
        multi *= digit;
        num = Math.floor(num / 10)

    }

    return multi

}

console.log(productsOfDigit(1232));

function noIsNegativePositiveZero(no) {

    let num = no;
    if (num > 0) return "positive"
    else if (num < 0) return "negative"
    else {

        return "zero"

    }


}

console.log(noIsNegativePositiveZero(123));


function noOfDigits(no) {

    let num = no;
    let count = 0;

    while (num > 0) {

        let digit = num % 10;
        count++;
        num = Math.floor(num / 10)

    }

    return count

}

console.log(noOfDigits(1233));


function reverseNoPalindrom(no) {

    let num = no;
    let originalNo = no;
    let rev = 0;

    while (num > 0) {

        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10)

    }

    return rev === originalNo ? `${originalNo} is palindrome ` : `${originalNo} is not palidrome `

}

console.log(reverseNoPalindrom(121));

function largestOfTwoNo(no1, no2) {

    if (no1 > no2) return `${no1} is largest `
    else return `${no2} is largest`


}


console.log(largestOfTwoNo(12, 23));

function largestOfThreeNo(no1, no2, no3) {

    if ((no1 > no2) && (no1 > no3)) return `${no1} is largest `
    else if (no2 > no3) return `${no2} is largest`
    else return `${no3} is largest`


}


console.log(largestOfThreeNo(33, 34, 32));

function smallestOfThreeNo(no1, no2, no3) {

    if ((no1 < no2) && (no1 < no3)) return `${no1} is smallest `
    else if (no2 < no3) return `${no2} is smallest`
    else return `${no3} is smallest`


}


console.log(smallestOfThreeNo(33, 34, 32));

function swapNoWithTemp(no1, no2) {

    let temp = no1;
    no1 = no2;
    no2 = temp

    return {

        no1, no2

    }

}

console.log(swapNoWithTemp(23, 45));

function swapNoWithoutTemp(no1, no2) {

    let a = no1;
    let b = no2;

    a = a + b;
    b = a - b;
    a = a - b

    return {

        a, b

    }

}

console.log(swapNoWithoutTemp(23, 45));

function sumOfNthNaturalNo(no) {

    if (no <= 0) return `${no} is not natural no `;
    let sum = 0

    for (let i = 1; i <= no; i++) {

        sum += i

    }

    return sum

}

console.log(sumOfNthNaturalNo(10));

function sumOfNthWholeNo(no) {


    let sum = 0

    for (let i = 0; i <= no; i++) {

        sum += i

    }

    return sum

}

console.log(sumOfNthWholeNo(10));

function factorialNo(no) {

    let num = no;
    let fact = 1;

    for (let i = 1; i <= num; i++) {

        fact *= i

    }

    return fact

}

console.log(factorialNo(5));

function powerOfNo(n, p) {

    let multi = 1
    if (p === 0) return 1

    if (p < 0) {

        for (let i = 1; i <= -p; i++) {

            multi *= n;

        }

        return 1 / multi

    }

    for (let i = 1; i <= p; i++) {

        multi *= n

    }

    return multi

}

console.log(powerOfNo(2, 2));

function maxDigit(no) {

    let num = no;
    let maxNo = 0

    while (num > 0) {

        let digit = num % 10;
        if (digit > maxNo) maxNo = digit;
        num = Math.floor(num / 10)

    }

    return maxNo

}

console.log(maxDigit(12335678));

function minDigit(no) {

    let num = no;
    let minNo = 9

    while (num > 0) {

        let digit = num % 10;
        if (digit < minNo) minNo = digit;
        num = Math.floor(num / 10)

    }

    return minNo

}

console.log(minDigit(12335678));


function isPrimeNo(no) {

    if (no < 2) return false;

    for (let i = 2; i * i <= no; i++) {

        if (no % i === 0) {

            return false

        }

    }

    return true

}

console.log(isPrimeNo(5));

function checkPrimeRange(no) {

    let sum = 0;

    for (let i = 1; i <= no; i++) {

        if (isPrimeNo(i)) {

            console.log(`${i} is prime no `);
            sum += i

        }

        else {

            console.log(`${i} is not prime no `);

        }

    }

    console.log(sum);


}

checkPrimeRange(10);

function nthPrimeNo(no) {


    let count = 0;
    let num = 1;

    while (count < no) {


        if (isPrimeNo(num)) {

            count++

        }

        num++


    }

    return num

}

function firstnthPrimeNo(no) {

    let num = 1;
    let count = 0;

    while (count < no) {


        if (isPrimeNo(num)) {

            console.log(num);
            count++;


        }

        num++;



    }

}

firstnthPrimeNo(10)


console.log(nthPrimeNo(2));

function noIsDivisibleBy5and3(no) {

    if (no % 3 === 0 && no % 5 === 0) {

        return true

    }

    return false


}
console.log(noIsDivisibleBy5and3(15));




function nthNoDivisibleBy3and5(no) {

    let num = 1;
    let count = 0;

    while (count < no) {

        if (noIsDivisibleBy5and3(num)) {

            console.log(num);
            count++;

        }

        num++

    }



}
nthNoDivisibleBy3and5(10)


function divisiorOfno(no) {

    let divisor = [];
    let sum = 0;

    for (let i = 1; i <= no; i++) {

        if (no % i === 0) {

            sum += i
            divisor[divisor.length] = i

        }

    }

    return {
        divisor,
        sum

    }

}

console.log(divisiorOfno(10));

function smallestDivisor(no) {



    for (let i = 1; i <= no; i++) {

        if (no % i === 0) {

            return i

        }

    }


}

console.log(smallestDivisor(10));

function smallestDivisorNot1(no) {



    for (let i = 2; i <= no; i++) {

        if (no % i === 0) {

            return i

        }

    }


}

console.log(smallestDivisorNot1(10));
function secondSmallestDivisorNot1(no) {

    let count = 0;

    for (let i = 2; i <= no; i++) {

        if (no % i === 0) {

            count++;

            if (count === 3) {

                return i

            }

        }

    }


}

console.log(secondSmallestDivisorNot1(10));

function fibonaciSeries(no) {

    let a = 0;
    let b = 1;

    if (no === 1) {

        console.log(a);
        return

    }

    console.log(a);
    console.log(b);
    let temp;

    for (let i = 3; i <= no; i++) {

        temp = a + b;
        console.log(temp);
        a = b;
        b = temp


    }


}

fibonaciSeries(2)

function nthFibo(no) {

    let a = 0;
    let b = 1;
    let temp;
    let sum = a + b

    if (no === 1) {

        return {
            temp: 0,
            sum: a

        }

    }

    if (no === 2) {

        return {
            temp: 1,
            sum: a + b

        }

    }


    for (let i = 3; i <= no; i++) {

        temp = a + b;
        sum += temp
        console.log(temp);
        a = b;
        b = temp;


    }

    return {

        temp: b, sum

    }

}

console.log(nthFibo(4));
// sum of digits raised to power of total no of digits
// A number is called an Armstrong number if the sum of its digits raised to the power of the total number of digits is equal to the number itself.

function armStrongNo(no) {

    let num = no;
    let originalNo = no;
    let lengthOfNo = num + "";
    let length = lengthOfNo.length;
    let sum = 0;

    while (num > 0) {

        let digit = num % 10;
        sum += digit ** length;
        num = Math.floor(num / 10)

    }
    console.log(sum);

    return sum === originalNo ? `${originalNo} is armStrong No ` : `${originalNo} is not armStrong No `


}

console.log(armStrongNo(153));
// sum of factors of no
// A perfect number is a number that is equal to the sum of its factors (divisors) — excluding the number itself.
function perfectNo(no) {

    let num = no;
    let originalNo = no;
    let sum = 0;

    for (let i = 1; i < 6; i++) {

        if (num % i === 0) {

            sum += i

        }

    }
    console.log(sum);


    return sum === originalNo ? `${originalNo} is perfect no ` : `${originalNo} is not perfect no `

}

console.log(perfectNo(6));

// sum of factorial of digits = no itself
function strongNo(no) {

    let num = no;
    let originalNo = no;
    let sum = 0;

    while (num > 0) {

        let digit = num % 10;
        let multi = 1

        for (let i = 1; i <= digit; i++) {

            multi *= i

        }
        sum += multi
        num = Math.floor(num / 10)

    }

    console.log(sum);

    return sum === originalNo ? "strong no" : "not a strong no"


}

console.log(strongNo(145));


function leapYear(year) {

    if (year % 400 === 0) return true
    if (year % 100 === 0) return false
    if (year % 4 === 0) return true
    return false

}


console.log(leapYear(2000));

function isPerfectSquare(no) {

    let num = no;

    for (let i = 1; i * i <= num; i++) {

        if (i * i === num) {

            return true

        }

    }

    return false

}

console.log(isPerfectSquare(9));

function isPerfectCube(no) {

    let num = no;

    for (let i = 1; i * i * i <= num; i++) {

        if (i * i * i === num) {

            return true

        }

    }

    return false

}

console.log(isPerfectCube(27));

function onetonthPerfectSquare(no) {

    let num = no;
    let perfectSquares = "";

    for (let i = 1; i <= num; i++) {

        if (isPerfectSquare(i)) {

            perfectSquares += i + "\n"

        }

    }

    return perfectSquares

}

console.log(onetonthPerfectSquare(10));


function isPerfectSquare2(no) {

    let num = no;

    if (Math.sqrt(num) % 1 === 0) {

        return true

    }


    return false

}

console.log(isPerfectSquare2(10));


function nthperfectSquare(no) {

    let num = 1;
    let count = 0;
    let result = "";


    while (count < no) {

        if (isPerfectSquare(num)) {

            result += num + "\n";
            count++

        }

        num++


    }

    return result

}

console.log(nthperfectSquare(10));

function twoMulti(no) {

    let num = no;
    let data = ""

    for (let i = 1; i <= 10; i++) {

        data += `${num * i}  `

    }

    return data

}
console.log(twoMulti(2));

// | From → To                              | JavaScript Method                    |
// | -------------------------------------- | ------------------------------------ |
// | **Binary → Decimal**                   | `parseInt(binary, 2)`                |
// | **Binary → Octal**                     | `parseInt(binary, 2).toString(8)`    |
// | **Binary → Hexadecimal**               | `parseInt(binary, 2).toString(16)`   |
// | **Binary → Binary (verify)**           | `parseInt(binary, 2).toString(2)`    |
// | **Octal → Decimal**                    | `parseInt(octal, 8)`                 |
// | **Octal → Binary**                     | `parseInt(octal, 8).toString(2)`     |
// | **Octal → Hexadecimal**                | `parseInt(octal, 8).toString(16)`    |
// | **Octal → Octal (verify)**             | `parseInt(octal, 8).toString(8)`     |
// | **Decimal → Binary**                   | `decimal.toString(2)`                |
// | **Decimal → Octal**                    | `decimal.toString(8)`                |
// | **Decimal → Hexadecimal**              | `decimal.toString(16)`               |
// | **Decimal → Decimal (verify)**         | `parseInt(decimal, 10).toString(10)` |
// | **Hexadecimal → Decimal**              | `parseInt(hex, 16)`                  |
// | **Hexadecimal → Binary**               | `parseInt(hex, 16).toString(2)`      |
// | **Hexadecimal → Octal**                | `parseInt(hex, 16).toString(8)`      |
// | **Hexadecimal → Hexadecimal (verify)** | `parseInt(hex, 16).toString(16)`     |

// 1011

function binaryToDecimal(no) {

    let num = no;
    let decimal = 0;
    let base = 1;

    while (num > 0) {

        let digit = num % 10;
        decimal += digit * base;
        base *= 2;
        num = Math.floor(num / 10)


    }

    return decimal

}

console.log(binaryToDecimal(1011));

// % 2 
function decimalToBinary(no) {

    let num = no;
    let binary = "";


    while (num > 0) {

        binary = num % 2 + binary;
        num = Math.floor(num / 2)


    }

    return binary

}

console.log(decimalToBinary(11));


// % 2 
function decimalToOctol(no) {

    let num = no;
    let octol = "";

    while (num > 0) {

        octol = num % 8 + octol;
        console.log(octol);
        num = Math.floor(num / 8);
        console.log(num);

    }

    return octol

}

console.log(decimalToOctol(11));
function decimalToHexaDecimal(no) {

    let hexChar = "0123456789ABCDEF";
    let num = no;
    let Hexadecimal = "";

    while (num > 0) {

        let digit = num % 16;
        Hexadecimal = hexChar[digit] + Hexadecimal;
        num = Math.floor(num / 16)

    }

    return Hexadecimal

}

console.log(decimalToHexaDecimal(26));


function octalToDecimal(no) {

    let num = no;
    let base = 1;
    let decimal = 0;

    while (num > 0) {

        let digit = num % 10;
        decimal += digit * base;
        base *= 8;
        num = Math.floor(num / 10)


    }

    return decimal

}

console.log(octalToDecimal(17));






