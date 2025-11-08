function printNo(no) {

    let temp = no;
    let rev = 0;

    while (temp > 0) {

        let digit = temp % 10;
        rev = rev * 10 + digit;
        temp = Math.floor(temp / 10)

    }

    while (rev > 0) {

        let digit = rev % 10;
        console.log(digit);
        rev = Math.floor(rev / 10)

    }


}

printNo(123)

function noIsEvnOdd(no) {

    let temp = no
    let even = {};
    let odd = {};

    while (temp > 0) {

        let digit = temp % 10;
        digit % 2 === 0 ? even[digit] = "even" : odd[digit] = "odd";
        temp = Math.floor(temp / 10)

    }

    return {

        even, odd

    }

}

console.log(noIsEvnOdd(123));

function sumOfDigit(no) {

    let temp = no;
    let sum = 0

    while (temp > 0) {

        let digit = temp % 10;
        sum += digit;
        temp = Math.floor(temp / 10)

    }

    return sum

}


console.log(sumOfDigit(123));

function productsOfDigit(no) {

    let temp = no;
    let multi = 1;

    while (temp > 0) {

        let digit = temp % 10;
        multi *= digit;
        temp = Math.floor(temp / 10)

    }

    return multi

}


console.log(productsOfDigit(1233));

function noIsNegativePositiveZero(no) {

    let temp = no;
    let num;

    if (temp < 0) {

        num = "negative"

    }

    else if (temp > 0) {

        num = "positive"

    }

    else {

        num = "zero"

    }

    return num

}


console.log(noIsNegativePositiveZero(0));

function noOfDigits(no) {

    let temp = no;
    let count = 0;

    if (temp === 0) return 1;
    if (temp < 0) temp = Math.abs(temp)

    while (temp > 0) {

        let digit = temp % 10;
        count++;
        temp = Math.floor(temp / 10)

    }

    return count

}

console.log(noOfDigits(21));

function reverseNoPalindrom(n) {

    if (n === 0) return 0
    let originalNo = n;
    let temp = Math.abs(n);
    let rev = 0

    while (temp > 0) {

        let digit = temp % 10;
        rev = rev * 10 + digit;
        temp = Math.floor(temp / 10);

    }

    return rev === originalNo ? `${originalNo} is palindrome` : `${originalNo} is not palindrome `

}

console.log(reverseNoPalindrom(121));
















