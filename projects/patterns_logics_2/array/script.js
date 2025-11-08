function printArray(arr) {


    let arr1 = arr;

    for (let i = 0; i < arr1.length; i++) {

        console.log(arr1[i]);

    }

}

printArray([1, 2, 3, 4, 5])


function sumOfElements(arr) {


    let arr1 = arr;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {

        sum += arr1[i];

    }

    return sum

}

console.log(sumOfElements([1, 2, 3, 4, 5]));


function maximumElement(arr) {

    let arr1 = arr;
    let maxEle = -Infinity;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > maxEle) {

            maxEle = arr1[i]

        }

    }


    return maxEle


}

console.log(maximumElement([1, 2, 3, 4, 6, 9]));




function minimumElement(arr) {

    let arr1 = arr;
    let minEle = Infinity;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] < minEle) {

            minEle = arr1[i]

        }

    }


    return minEle


}

console.log(minimumElement([1, 2, 3, 4, 6, 9]));

function countEvenOdd(arr) {

    let arr1 = arr;

    let evenEle = [];
    let oddEle = [];
    let countEven = 0;
    let countOdd = 0;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] % 2 === 0) {

            evenEle[evenEle.length] = arr1[i];
            countEven++

        }

        else {

            oddEle[oddEle.length] = arr1[i];
            countOdd++


        }

    }

    return {

        evenEle, oddEle, countEven, countOdd

    }

}

console.log(countEvenOdd([1, 2, 3, 4, 5]));

function reverseArray(arr) {

    let arr1 = arr;
    let arr2 = [];

    for (let i = arr1.length - 1; i >= 0; i--) {

        arr2[arr2.length] = arr1[i]

    }

    return arr2

}

console.log(reverseArray([1, 2, 3, 4, 5]));

function secondLargestNo(arr) {

    let arr1 = arr;
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > firstLargest) {

            secondLargest = firstLargest;
            firstLargest = arr1[i]

        }

        else if (arr1[i] > secondLargest && arr1[i] < firstLargest) {

            secondLargest = arr[i]

        }


    }


    return {

        firstLargest, secondLargest

    }

}

console.log(secondLargestNo([1, 2, 6, 4, 10]));






function thirdLargestNo(arr) {

    let arr1 = arr;
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > firstLargest) {

            thirdLargest = secondLargest
            secondLargest = firstLargest;
            firstLargest = arr1[i]

        }

        else if (arr1[i] > secondLargest && arr1[i] < firstLargest) {

            secondLargest = arr[i]

        }

        else if (arr1[i] > thirdLargest && arr1[i] < secondLargest) {

            thirdLargest = arr1[i]

        }


    }


    return {

        firstLargest, secondLargest, thirdLargest

    }

}

console.log(thirdLargestNo([1, 2, 6, 4, 10]));

function positiveNegativeZeroCount(arr) {

    let arr1 = arr;
    let countPositive = 0;
    let countNegative = 0;
    let countZero = 0;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > 0) {

            countPositive++

        }

        else if (arr1[i] < 0) {

            countNegative++

        }

        else {


            countZero++

        }

    }


    return {

        countPositive, countNegative, countZero

    }

}

console.log(positiveNegativeZeroCount([1, 2, -2, 0]));


function printElementsOddEvenIndex(arr) {

    let arr1 = arr;
    let evenIndexEle = [];
    let oddIndexEle = [];

    for (let i = 0; i < arr1.length; i++) {

        if (i % 2 === 0) {

            evenIndexEle[evenIndexEle.length] = arr1[i]

        }

        else {

            oddIndexEle[oddIndexEle.length] = arr1[i]


        }

    }

    return {

        evenIndexEle, oddIndexEle

    }

}

console.log(printElementsOddEvenIndex([1, 2, 3, 4, 5]));

function swapFirstAndLastElement(arr) {

    let arr1 = arr;
    let temp = arr1[0];
    arr1[0] = arr1[arr1.length - 1]
    arr1[arr1.length - 1] = temp;

    return arr1

}

console.log(swapFirstAndLastElement([1, 2, 3, 4, 5]));

function sumAndAverage(arr) {

    let arr1 = arr;
    let sum = 0;
    let average;

    for (let i = 0; i < arr1.length; i++) {

        sum += arr1[i];

    }


    return average = sum / arr1.length

}

console.log(sumAndAverage([1, 2, 3, 4, 5]));

function eleGreaterThanGivenNo(arr, ele) {

    let arr1 = arr;
    let elem = ele
    let max = []

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > elem) {

            max[max.length] = arr1[i];

        }

    }

    return max

}

console.log(eleGreaterThanGivenNo([1, 2, 3, 4, 5], 3));


function differenceBetweenMaxAndMin(arr) {

    let arr1 = arr;
    let max = -Infinity;
    let min = Infinity;
    let diff = 0;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > max) {

            max = arr1[i];

        }

        if (arr1[i] < min) {

            min = arr1[i];

        }

    }

    diff = max - min

    return {

        max, min, diff

    }

}


console.log(differenceBetweenMaxAndMin([1, 2, 3, 4, 5, 10]));

function countDuplicates(arr) {

    let seen = {};
    let duplicates = {};
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (seen[arr[i]]) {

            if (!duplicates[arr[i]]) {

                count++;
                duplicates[arr[i]] = true

            }

        }

        else {

            seen[arr[i]] = true

        }


    }

    return count

}

console.log(countDuplicates([1, 1, 1, 2, 2, 3, 4,]));

function removeDuplicates(arr) {

    let arr1 = arr;
    let removeDuplicates = [];
    let withoutDuplicates = [];
    let seen = {}

    for (let i = 0; i < arr1.length; i++) {

        if (!seen[arr1[i]]) {

            seen[arr1[i]] = true;
            withoutDuplicates[withoutDuplicates.length] = arr1[i]

        }

        else {

            removeDuplicates[removeDuplicates.length] = arr1[i]

        }

    }


    return {

        removeDuplicates, withoutDuplicates

    }

}

console.log(removeDuplicates([1, 2, 3, 1, 1, 2, 4, 5]));

function frequencyOfEachChar(arr) {

    let arr1 = arr;
    let seen = {};
    let highestFre = arr[0];
    let lowestFre = arr[0];

    for (let i = 0; i < arr1.length; i++) {

        if (seen[arr1[i]]) {

            seen[arr1[i]]++

        }

        else {

            seen[arr1[i]] = 1

        }




    }


    for (let i = 0; i < arr1.length; i++) {

        if (seen[arr1[i]] > seen[highestFre]) {

            highestFre = arr1[i]

        }

        if (seen[arr1[i]] < seen[lowestFre]) {

            lowestFre = arr1[i]

        }



    }


    return {

        seen, lowestFre, highestFre

    }

}

console.log(frequencyOfEachChar([1, 1, 2, 3, 4, 5, 6, 7, 8, 4, 4]));

function PrimeNo(arr) {

    let arr1 = arr;
    let prime = [];

    for (let i = 0; i < arr.length; i++) {

        let isPrime = true;

        if (arr1[i] < 2) continue;

        for (let j = 2; j * j <= arr1[i]; j++) {

            if (arr1[i] % 2 === 0) {

                isPrime = false;
                break

            }

        }

        if (isPrime) {

            prime[prime.length] = arr1[i]

        }


    }

    return prime


}



console.log(PrimeNo([1, 2, 3, 4, 5]));


function linearSearch(arr, find) {

    let arr1 = arr;
    let search = false;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === find) {

            search = true

        }


    }

    return search

}

console.log(linearSearch([1, 2, 3, 4, 5], 2));

function mapDatas(arr) {

    let arr1 = arr;
    let arr2 = []

    for (let i = 0; i < arr1.length; i++) {

        arr2[arr2.length] = arr1[i] * arr1[i]

    }

    return arr2

}

console.log(mapDatas([1, 2, 3, 4]));
function filterDatas(arr) {

    let arr1 = arr;
    let arr2 = [];

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > 1) {

            arr2[arr2.length] = arr1[i]

        }

    }

    return arr2

}

console.log(filterDatas([1, 2, 3, 4]));

function totalChar(arr) {

    let char = 0
    for (let i = 0; i < arr.length; i++) {

        char += arr[i].length

    }

    return char

}

console.log(totalChar(["apple", "kishan"]));

function sortingAscending(arr) {

    let arr1 = arr;

    for (let i = 0; i < arr1.length; i++) {

        for (let j = i + 1; j < arr1.length; j++) {

            if (arr1[i] > arr1[j]) {

                let t = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = t


            }

        }

    }

    return arr1

}

console.log(sortingAscending([1, 2, 3, 6, 2, 4, 5]));




function sortingDescending(arr) {

    let arr1 = arr;

    for (let i = 0; i < arr1.length; i++) {

        for (let j = i + 1; j < arr1.length; j++) {

            if (arr1[i] < arr1[j]) {

                let t = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] = t


            }

        }

    }

    return arr1

}

console.log(sortingDescending([1, 2, 3, 6, 2, 4, 5]));

function perfectSquares(arr) {

    let arr1 = arr;
    let perfectSquare = [];


    for (let i = 0; i < arr1.length; i++) {


        for (let j = 1; j * j <= arr1[i]; j++) {

            if (j * j === arr1[i]) {

                perfectSquare.push(arr1[i])

            }

        }


    }

    return perfectSquare

}

console.log(perfectSquares([1, 2, 3, 4, 5, 6]));


function replaceNegativeNowithZero(arr) {

    let arr1 = arr;
    let arr2 = []

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] < 0) {

            arr2[i] = 0

        }

        else {

            arr2[i] = arr1[i]

        }


    }

    return arr2

}

console.log(replaceNegativeNowithZero([1, -2, 5, 4, 2, -3, 7]));

function swapAlternateElements(arr) {

    let arr1 = arr;

    for (let i = 0; i < arr1.length; i++) {


        for (let j = i + 1; j < arr1.length; j++) {

            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp


            i++;
            break

        }

    }

    return arr1

}


console.log(swapAlternateElements([1, 2, 3, 4]));

function moveAllZerosToEnd(arr) {

    let arr1 = arr;
    let arr2 = [];
    let count = 0

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== 0) {

            arr2[arr2.length] = arr1[i]

        }

        else {

            count++

        }

    }

    for (let i = 0; i < count; i++) {

        arr2[arr2.length] = 0

    }


    return arr2

}


console.log(moveAllZerosToEnd([1, 2, 0, 4, 0, 3, 4]));

function negativeNoTobeginning(arr) {

    let arr1 = arr;
    let arr2 = [];
    let count = 0

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] < 0) {

            arr2[arr2.length] = arr1[i]

        }


    }

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] > 0) {

            arr2[arr2.length] = arr1[i]

        }


    }

    return arr2

}


console.log(negativeNoTobeginning([1, 2, 3, -1, 4, -3]));

function reverseArrayWithoutnewArray(arr) {

    let arr1 = arr;

    for (let i = arr1.length; i >= 0; i--) {

        arr1[arr1.length] = arr1[i]

    }

    return arr1

}

console.log(reverseArrayWithoutnewArray([1, 2, 3, 4]));


function mergeTwoArray(arr1, arr2) {

    let arr3 = []
    for (let i = 0; i < arr1.length; i++) {

        arr3[arr3.length] = arr1[i]

    }
    for (let i = 0; i < arr2.length; i++) {

        arr3[arr3.length] = arr2[i]

    }

    return arr3

}


console.log(mergeTwoArray([1, 2, 3, 4, 5], [6, 7, 8, 9]));






