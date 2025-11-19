function decreasingPattern(start, step, n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += start - (i - 1) * step

        }

        data += "\n"

    }

    return data

}

console.log(decreasingPattern(8, 2, 4));

function increasingPattern(start, step, n) {

    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += start + (i - 1) * step

        }

        data += "\n"

    }

    return data

}

console.log(increasingPattern(2, 2, 4));

function continuousCounting(n) {

    let no = n;
    let temp = 1;
    let data = ""

    for (let i = 1; i <= no; i++) {

        for (let j = 1; j <= i; j++) {

            data += temp;
            temp++


        }

        data += "\n"

    }

    return data

}
console.log(continuousCounting(4));

function reverseCounting(n) {

    let no = n;
    let temp = 10;
    let data = "";

    for (let i = 1; i <= no; i++) {

        for (let j = 1; j <= i; j++) {

            data += temp;
            temp--

        }

        data += "\n"

    }

    return data

}

console.log(reverseCounting(4));

function rowColumn(n) {

    let no = n;
    let temp = 0;
    let data = "";

    for (let i = 1; i <= no; i++) {

        for (let j = 1; j <= i; j++) {

            data += i * j

        }

        data += "\n"

    }

    return data

}

console.log(rowColumn(4));


function squarePatternj(n) {

    let data = "";
    let temp = 0;
    let no = n


    for (let i = 1; i <= no; i++) {

        for (let j = 1; j <= i; j++) {

            data += j * j

        }

        data += "\n"

    }

    return data

}

console.log(squarePatternj(4));


function squarePatterni(n) {

    let data = "";
    let temp = 0;
    let no = n


    for (let i = 1; i <= no; i++) {

        for (let j = 1; j <= i; j++) {

            data += i * i

        }

        data += "\n"

    }

    return data

}

console.log(squarePatterni(4));

function triangular(n) {

    let no = n;
    let temp = 0;
    let data = "";

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += (i * i + i) / 2

        }

        data += "\n"

    }

    return data

}

console.log(triangular(4));


function oddNo(n) {

    let no = n;
    let data = "";
    let temp = 0;

    for (let i = 1; i <= no; i++) {

        for (let j = 1; j <= i; j++) {

            data += 2 * i - 1

        }

        data += "\n"

    }

    return data

}

console.log(oddNo(4));

function evenNo(n) {

    let no = n;
    let data = "";
    let temp = 0;

    for (let i = 1; i <= no; i++) {

        for (let j = 1; j <= i; j++) {

            data += 2 * i

        }

        data += "\n"

    }

    return data

}

console.log(evenNo(4));

function rowColumnplus(n) {

    let data = "";
    let no = n;
    let temp = 0;

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += i + j;

        }

        data += "\n"

    }

    return data

}

console.log(rowColumn(4));



function rowColumnminus(n) {

    let data = "";
    let no = n;
    let temp = 0;

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            data += i - j;

        }

        data += "\n"

    }

    return data

}

console.log(rowColumnminus(4));

function reverseTriangle(n) {

    let no = n;
    let temp = 0;
    let data = "";

    for (let i = no; i >= 1; i--) {

        for (let j = 1; j <= i; j++) {

            data += j

        }

        data += "\n"

    }

    return data


}

console.log(reverseTriangle(5));



