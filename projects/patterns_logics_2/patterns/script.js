// right half pyramid

function rightHalfPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += " *"

        }

        data += "\n"

    }

    return data

}

console.log(rightHalfPyramid(5));
function rightHalfPyramidNoIncreasing(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += j + " ";

        }

        data += "\n"

    }

    return data

}

console.log(rightHalfPyramidNoIncreasing(5));

console.log("increasing reverse");

function rightHalfPyramidNoIncreasingReverse(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = i; j >= 1; j--) {

            data += j + " ";

        }

        data += "\n"

    }

    return data

}

console.log(rightHalfPyramidNoIncreasingReverse(5));
function rightHalfPyramidNoRepeated(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += i + " ";

        }

        data += "\n"

    }

    return data

}

console.log(rightHalfPyramidNoRepeated(5));

function invertedRightHalf(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = n; j >= i; j--) {

            data += " *";

        }

        data += "\n"

    }

    return data


}

console.log(invertedRightHalf(5));

function hollowRightHalfPyramid(n) {

    let data = ""

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            if (j === 1 || j === i || i === n) {

                data += " *"

            }

            else {

                data += "  "

            }

        }

        data += "\n"

    }

    return data

}


console.log(hollowRightHalfPyramid(5));


function continuousNumber(n) {

    let data = "";
    let a = 1;

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += a + " ";
            a++

        }

        data += "\n"

    }

    return data

}

console.log(continuousNumber(5));




function continuousNumberOdd(n) {

    let data = "";
    let a = 1;

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += a + " ";
            a += 2

        }

        data += "\n"

    }

    return data

}

console.log(continuousNumberOdd(5));

function rightHalfPyramidAlphabet(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += String.fromCharCode(j + 64)

        }

        data += "\n"

    }

    return data

}

console.log(rightHalfPyramidAlphabet(5));

function continuousRightHalfPyramidAlphabet(n) {

    let data = "";
    let a = 1

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += String.fromCharCode(a + 64);
            a++

        }

        data += "\n"

    }

    return data

}

console.log(continuousRightHalfPyramidAlphabet(5));

function binaryRightHalfPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            if ((i + j) % 2 === 0) {

                data += "1"

            }

            else {

                data += "0"

            }

        }

        data += "\n"

    }

    return data

}

console.log(binaryRightHalfPyramid(5));




function binaryRightHalfPyramid2(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            if (j % 2 === 1) {

                data += "1"

            }

            else {

                data += "0"

            }

        }

        data += "\n"

    }

    return data

}

console.log(binaryRightHalfPyramid2(5));

// left half pyramid



function leftHalfPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = i; k <= n; k++) {

            data += " ";

        }

        for (let j = 1; j <= i; j++) {

            data += "*"

        }

        data += "\n";

    }

    return data

}

console.log(leftHalfPyramid(5));

function leftHalfPyramidNoReverse(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = i; k <= n; k++) {

            data += " ";

        }

        for (let j = i; j >= 1; j--) {

            data += j

        }

        data += "\n";

    }

    return data

}

console.log(leftHalfPyramidNoReverse(5));

function invertedLeftHalfPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = 1; k <= i - 1; k++) {

            data += " ";

        }

        for (let j = i; j <= n; j++) {

            data += "*"

        }

        data += "\n"

    }

    return data

}

console.log(invertedLeftHalfPyramid(5));


// full pyramid

function fullPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = i; k <= n - 1; k++) {

            data += "  ";

        }

        for (let j = 1; j <= 2 * i - 1; j++) {

            data += " *"

        }

        data += "\n";

    }


    return data

}

console.log(fullPyramid(5));


function invertedFullPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = 1; k <= i - 1; k++) {

            data += " ";

        }

        for (let j = 1; j <= 2 * (n - i) + 1; j++) {

            data += "*";

        }

        data += "\n"

    }


    return data

}

console.log(invertedFullPyramid(5));

function rhombus(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = i; k <= n; k++) {

            data += " ";

        }

        for (let j = 1; j <= n; j++) {

            data += "*"

        }

        data += "\n"

    }

    return data

}


console.log(rhombus(5));

function diamondPattern(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = i; k <= n - 1; k++) {

            data += "  ";

        }

        for (let j = 1; j <= 2 * i - 1; j++) {

            data += " *";

        }

        data += "\n";

    }
    for (let i = 2; i <= n; i++) {

        for (let k = 1; k <= i; k++) {

            data += "  "

        }

        for (let j = 1; j <= 2 * (n - i) - 1; j++) {

            data += " *"

        }

        data += "\n"


    }

    return data

}

console.log(diamondPattern(5));

function hourGlass(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = 1; k <= i - 1; k++) {

            data += "  ";

        }

        for (let j = 1; j <= 2 * (n - i) + 1; j++) {

            data += " *"

        }

        data += "\n"

    }

    for (let i = 2; i <= n; i++) {

        for (let k = i; k <= n - 1; k++) {

            data += "  ";

        }

        for (let j = 1; j <= 2 * i - 1; j++) {

            data += " *"

        }

        data += "\n"

    }

    return data

}

console.log(hourGlass(5));

function hollowSquare(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= n; j++) {

            if (i === 1 || i === 5 || j === 5 || j === 1) {

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

console.log(hollowSquare(5));








