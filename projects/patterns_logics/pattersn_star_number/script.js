function rightHalfPyramid(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let j=1 ; j<=i;j++) {

            data += "*" ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(rightHalfPyramid(5));

function rightHalfPyramidNo(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let j=1 ; j<=i;j++) {

            data += j ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(rightHalfPyramidNo(5));

function rightHalfPyramidAlphabet(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let j=1 ; j<=i;j++) {

            data += String.fromCharCode(j + 64) ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(rightHalfPyramidAlphabet(5));

function leftHalfPyramid(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k= 1 ; k<=n - i;k++) {

            data += " " ;

        }
        for(let j=1 ; j<=i;j++) {

            data += "*" ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(leftHalfPyramid(5));

function leftHalfPyramidNo(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k= 1 ; k<=n - i;k++) {

            data += " " ;

        }
        for(let j=1 ; j<=i;j++) {

            data += j ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(leftHalfPyramidNo(5));



function leftHalfPyramidAlphabet(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k= 1 ; k<=n - i;k++) {

            data += " " ;

        }
        for(let j=1 ; j<=i;j++) {

            data += String.fromCharCode(j + 64) ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(leftHalfPyramidAlphabet(5));






function fullPyramid(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k= 1 ; k<=n - i;k++) {

            data += " " ;

        }
        for(let j=1 ; j<=i;j++) {

           data += "* " ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(fullPyramid(5));





function fullPyramid2(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k= 1 ; k<=n - i;k++) {

            data += "  " ;

        }
        for(let j=1 ; j<=2 * i - 1; j++) {

           data += " *" ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(fullPyramid2(5));


function fullPyramid2No(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k= 1 ; k<=n - i;k++) {

            data += "  " ;

        }
        for(let j=1 ; j<=2 * i - 1; j++) {

           data += j + " " ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(fullPyramid2No(5));

function fullPyramid2Alphabet(n) {

    // right half = right angle
    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k= 1 ; k<=n - i;k++) {

            data += "  " ;

        }
        for(let j=1 ; j<=2 * i - 1; j++) {

           data += String.fromCharCode(j + 64) + " " ;

        }

        data += "\n" ;

    }

    return data
    
}

console.log(fullPyramid2Alphabet(5));

function invertedRightPyramid(n) {

    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let j=n; j>=i ; j-- ) {

            data += "*"

        }

        data += "\n"

    }

    return data

}

console.log(invertedRightPyramid(5));

function invertedLeftPyramid(n) {

    let data = "" ;

    for(let i=1; i<=n; i++ ) {

        for(let k=1; k <=i ; k++ ) {

            data += " " ;

        }
        for(let j= 1 ; j<= 2 * (n - i) + 1 ; j++  ) {

            data += "*"

        }

        data += "\n"

    }

    return data

}

console.log(invertedLeftPyramid(5));


function rhombus(n) {

    let data = "";

    for(let i=1 ; i<=n ; i++ ) {

        for(let k=n-1; k>=i; k-- ) {

            data += " " ;

        }

        for(let j=1; j<=n ; j++ ) {

            data += " *"

        }

        data += "\n"

    }

    return data
 
}
console.log(rhombus(5));


function diamondPattern(n) {

    let data = "" ;

    for(let i=1; i<= n; i++ ) {

        for(let k=1; k<=n-i ; k++) {

            data += "  " ;

        }

        for(let j=1; j<= 2*i - 1; j++) {

            data += " *"

        }

        data += "\n"

    }
    for(let i=1; i<= n-1; i++ ) {

        for(let k=1; k<=i ; k++) {

            data += "  " ;

        }

        for(let j=1; j<= 2 * (n - i) - 1 ; j++) {

            data += " *"

        }

        data += "\n"

    }

    return data

}


console.log(diamondPattern(5));

function hourglass(n) {

    let data = "" ;

    for(let i=1; i<=n ; i++ ) {

        for(let k=1; k<=i; k++ ) {

            data += "  " ;

        }

        for(let j=1 ; j<= 2*(n - i) + 1 ; j++ ) {

            data += " *"

        }

        data += "\n" ;

    }

    for(let i=1; i<= n - 1 ; i++ ) {

        for(let k= 1 ; k<=n - i; k++ ) {

            data += "  " ;

        }

        for(let j=1 ; j<= 2 * i + 1  ; j++ ) {

            data += " *"

        }

        data += "\n" ;

    }

    return data
    

}


console.log(hourglass(5));

function hollowSquare(n) {

    let data = "";

    for(let i=1; i<=n; i++ ) {

        for(let j=1; j<=n; j++ ) {

            if(i === 1 || i === 5 || j === 1 || j === 5 ) {

                data += "*"

            }

            else {

                data += " ";

            }

        }

        data += "\n"

    }

    return data

}

console.log(hollowSquare(5));


function hollowPyramid(n) {

    let data = "";

    for(let i=1; i<=n; i++ ) {

        for(let k=1; k<= i ; k++) {

            data += " ";

        }

        for(let j=n; j>=i; j-- ) {

           if(i === 1 || j === i || j === 5 ) {

            data += " *"

           }

           else {

            data += "  ";

           }

        }

        data += "\n"

    }

    return data

}

console.log(hollowPyramid(5));

function counting(n) {

    let data = "" ;
    let a = 1

    for(let i=1; i<=n; i++ ) {

        for(let j=1; j<=i; j++ ) {

           data += a * a;
           a++
         

        }

        data += "\n" ;

    }

    return data

}

console.log(counting(5));
