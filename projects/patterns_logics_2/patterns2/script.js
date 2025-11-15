// *
// **
// ***
// ****
// *****

function rightHalfPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += "*"

        }

        data += "\n"

    }

    return data

}


console.log(rightHalfPyramid(5));


function rightHalfPyramidIncreasing(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += String.fromCharCode(j + 64)

        }

        data += "\n"

    }

    return data

}


console.log(rightHalfPyramidIncreasing(5));

function fullPyramid(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = i; j <= n - 1; j++) {

            data += " ";

        }

        for (let j = 1; j <= i; j++) {

            data += " *"

        }

        data += "\n"

    }

    return data

}

console.log(fullPyramid(5));

function fullPyramid13RightHalf(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = i; j <= n - 1; j++) {

            data += "  ";

        }

        for (let j = 1; j <= 2 * i - 1; j++) {

            data += " *"

        }

        data += "\n"

    }

    return data


}

console.log(fullPyramid13RightHalf(5));

function invertedRightHalf(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = i; j <= n; j++) {

            data += "*"

        }

        data += "\n"

    }

    return data

}

console.log(invertedRightHalf(5));

function invertedLeftHalf(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = 1; k <= i; k++) {

            data += " ";



        }

        for (let j = i; j <= n; j++) {

            data += "*"

        }

        data += "\n"

    }

    return data

}

console.log(invertedLeftHalf(5));

function invertedLeftHalf2(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = 1; k <= i; k++) {

            data += " ";



        }

        for (let j = 1; j <= 2 * (n - i) + 1; j++) {

            data += "*"

        }

        data += "\n"

    }

    return data

}

console.log(invertedLeftHalf2(5));
function invertedLeftHalf2Hollow(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let k = 1; k <= i; k++) {

            data += " ";



        }

        for (let j = 1; j <= 2 * (n - i) + 1; j++) {

            if (j === 2 * (n - i) + 1 || j === 1 || i === 1) {

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

console.log(invertedLeftHalf2Hollow(5));


function diamondPattern(n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = i; j <= n - 1; j++) {

            data += " "

        }

        for (let j = 1; j <= i; j++) {

            data += " *"

        }

        data += "\n"

    }
    for (let i = 2; i <= n; i++) {

        for (let k = 1; k <= i - 1; k++) {

            data += " ";

        }

        for (let j = i; j <= n; j++) {

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