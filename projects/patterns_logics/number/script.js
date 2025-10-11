function numberIsevenOdd(n) {

    let num = n ;
    let evenNo = [];
    let oddNo = [];

    for(let i=1; i<=num ; i++  ) {

        if(i % 2 === 0) {

           evenNo.push(i) 
            
        }

        else {

         oddNo.push(i)

        }

    }

    return {evenNo,oddNo}


}

console.log(numberIsevenOdd(11));

function sumOfDigits(n) {

    let num = n ;
    let sum = 0;

    while(num > 0 ) {

        let digit = num % 10 ;
        sum += digit ;
        num = Math.floor(num/10) ;

    }

    return sum

}

console.log(sumOfDigits(1233));

function productsOfDigits(n) {

    let num = n ;
    let multi = 1 ;

    while(num > 0) {

        let digit = num % 10 ;
        multi *= digit ;
        num = Math.floor(num / 10)

    }

    return multi

}

console.log(productsOfDigits(1233));

function numberIsPositiveNegativeZero(n) {

    let num = n;

    if(num > 0) {

        console.log("num is positive");
        
    }

    else if(num < 0) {

        console.log("num is negative");
        
    }

    else {

        console.log("num is zero");
        
    }


}

numberIsPositiveNegativeZero(12);

function numOfDigits(n) {

    let num = n ;
    let count = 0 ;

    while(num > 0) {

        count++
        num = Math.floor(num / 10)

    }

    return count

}


console.log(numOfDigits(12334));

function reverseNo(n) {

    let num = n ;
    let number = n ;
    let rev = 0 ;

    while(number > 0) {

        let digit = number % 10 ;
        rev = rev * 10 + digit ;
        number = Math.floor(number / 10) 

    }

    return rev

}

console.log(reverseNo(1234));

function palindromeNo(n) {

    let num = n ;
    let number = n ;
    let rev = 0 ;

    while(number > 0) {

        let digit = number % 10 ;
        rev = rev * 10 + digit ;
        number = Math.floor(number / 10) 

    }

    return rev === num ? "palindrome" : "not palindrome"

}

console.log(palindromeNo(121));

function factorialNo(n) {

    let num = n ;
    let fact = 1 ;

    for(let i=1; i<=num ; i++ ) {

        fact *= i

    }

    return fact

}


function nthFact(n) {

    for(let i=1 ; i<=n; i++ ) {

       console.log( factorialNo(i));
       

    }

}

nthFact(10)

function naturalNo(n) {

    let num = n ;
    let sum = 0 ;

    if(num <= 0) console.log("not a natural no");
    

    for(let i=1; i<= num; i++ ) {

        sum += i

    }

    return sum

}

console.log(naturalNo(10));


function sumOfEvenNo(num) {

    let n = num ;
    let sum = 0 ;

    for(let i=1; i<=num; i++ ) {

        sum += 2 * i ;
        

    }

    return sum


}

console.log(sumOfEvenNo(5));


function sumOfOddNo(num) {

    let n = num ;
    let sum = 0 ;

    for(let i=0; i<num; i++ ) {

        sum += 2 * i + 1 ;
        

    }

    return sum


}

console.log(sumOfOddNo(5)); // 3,5,7,9,11

function fibonaci(n) {

    let num = n ;
    let a = 0 , b = 1 , c ;

    if(num === 1) {

        c = 0 ;

    }

    else if(num === 2) {

        c = 1 ;

    }

    else {

        for(let i=3 ; i<= num ; i++ ) {

            c = a + b ;
            a = b ;
            b = c ;

        }

    }

    return c 

}

console.log(fibonaci(4)); // 0,1,1,2,3,5,8,13

function fibonaciSeries(n) {

    let num = n ;
    let a = 0, b = 1 , c ;
    console.log(a);
    console.log(b);
    
    for(let i=1 ; i<= num; i++ ) {

        c = a + b ;
        console.log(c);
        a = b ;
        b = c ;

    }

}

fibonaciSeries(10)

function primeNo(n) {

    let num = n ;

    if(num < 2) return `${num} is not prime no ` ;
    if(num === 2) return `${num} is prime no ` ;
    if(num % 2 === 0) return `${num} is not prime no ` ;

    for(let i=3 ; i<= Math.sqrt(num) ; i += 2 ) {

        if(num % i === 0) {

            return `${num} is not prime no ` ;

        }

    }

    return `${num} is prime no `  ;

}



function nthPrimeNo(n) {

    for(let i=1 ; i<=n ; i++ ) {

        console.log(primeNo(i));
        

    }


}

nthPrimeNo(10)

function greatestOfThreeNo(a,b,c) {

    let max = c ;

    if(a > max) max = a ;
    if(b > max) max = b ;


    return max

}
console.log(greatestOfThreeNo(3,4,5));


function lowestOfThreeNo(a,b,c) {

    let min = c ;

    if(a < min) min = a ;
    if(b < min) min = b ;


    return min

}
console.log(lowestOfThreeNo(3,4,5));

function armStrongno(n) {

    let number1 = n ;
    let num = n ;
    num = n + "" ;
    let length = num.length ; // 3
    num = + num ;
    let sum = 0 ;

    while(num > 0) {

        let digit = num % 10 ;
        sum += digit ** length ;
        num = Math.floor(num / 10) ;

    }

    return sum === number1 ? `${number1} is armStrongno` : `${number1} is not a armStrongno`
    
    

}

console.log(armStrongno(153));

function swapNo(a,b) {

    a = a + b ;
    b = a - b ;
    a = a - b ;

    console.log(a,b);
    

}

swapNo(1,2)

function perfectNo(n) {

    let num  = n ;
    let sum = 0 ;

    for(let i=1; i<num ; i++ ) {

        if(num % i === 0) {

            sum += i 

        }

    }

   return num === sum ? "perfectNo" : "not a perfectNo" 


}

console.log(perfectNo(14));

// 1,2,4,7,14

function largestDigitInNumber(n) {

    let num = n ;
    let largestno = 0 ;

    while(num > 0) {

        let digit = num % 10 ;
        if(digit > largestno) largestno = digit ;
        num = Math.floor(num / 10)

    }

    return largestno

}

console.log(largestDigitInNumber(92345));

function smallestDigitInNumber(n) {

    let num = n ;
    let smallestno = 9;

    while(num > 0) {

        let digit = num % 10 ;
        if(digit < smallestno) smallestno = digit ;
        num = Math.floor(num / 10)

    }

    return smallestno

}

console.log(smallestDigitInNumber(92345));

function countEvenDigits(n) {

    let num = n ;
    let count = 0 ;

    while(num > 0) {

        let digit = num % 10 ;
        if(digit % 2 === 0) count++ 
        num = Math.floor(num / 10)

    }

    return count

}

console.log(countEvenDigits(12346));


function factorialNoForStrongNo(n) {

    let num = n ;
    let sum = 1;

    for(let i=1; i<=num ; i++ ) {

        sum *= i 

    }

    return sum

}

console.log(factorialNoForStrongNo(3));


function strongNo(n) {

    let number1 = n ;
    let num = n ;
    let sum = 0 ;

    while(num > 0) {

        let digit = num % 10 ;
        sum += factorialNoForStrongNo(digit) ;
        num = Math.floor(num / 10)

    }

    return sum === number1 ? `${number1} is strong no ` : `${number1} is not a strong no `

}

console.log(strongNo(145));

function leapYear(year) {

    if(year % 400  === 0 ) return true 
    if(year % 100  === 0 ) return false 
    if(year % 4 === 0) return true
    return false 
   
}

console.log(leapYear(2020));







