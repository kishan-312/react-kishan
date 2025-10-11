function printAllNo(a) {

    let arr1 = a ;

    for(let i=0; i< arr1.length; i++ ) {

        console.log(arr1[i]);

    }

}

printAllNo([1,2,3,4,5])

function lengthOfArray(a) {

    let array1 = a ;
    let count = 0 ;
    let i = 0 ;

    while(array1[i] !== undefined ) {

        count ++ ;
        i++


    }
    
    return count

}

console.log(lengthOfArray([1,2,3,4]));

function reverseArray(a) {

    let array1 = a ;

    for(let i= array1.length - 1 ; i>=0 ; i--) {

        console.log(array1[i]);
        

    }


}

reverseArray([1,2,3,4])

function sumOfElements(a) {

    let array1 = a ;
    let sum = 0 ;

    for(let i=1 ; i< array1.length ; i++ ) {

        sum += array1[i] ;

    }

    return sum 


}

console.log(sumOfElements([1,2,3,4]));

function averageOfElements(a) {

    let array1 = a ;
    let sum = 0 ;

    for(let i=1 ; i< array1.length ; i++ ) {

        sum += array1[i] ;

    }

    return sum / array1.length 


}

console.log(averageOfElements([1,2,3,4]));


function linearSearch(a) {

    let array1 = a ;
    let search  = 4 ;
    let isAvailable = false ;

    for(let i=1; i < array1.length ; i++ ) {

        if(array1[i] === search ) {

            isAvailable =  true ;
            break

        }

    }


    return isAvailable

}

console.log(linearSearch([1,3,4,5]));

function frequencyOfEachElement(a) {

    let array1 = a ;
    let obj1 = {} ;

    for(let i=0; i< array1.length ; i++ ) {

        if(obj1[array1[i]] ) {

            obj1[array1[i]]++

        }
        else {

            obj1[array1[i]] = 1 

        }

    }

    return obj1


}

console.log(frequencyOfEachElement([1,2,3,4,5,6,1]));

function findDuplicates(a) {

    let array1 = a ;
    let removeDuplicates = {} ;
    let duplicates = []; 
    let removeDupliactes = []

    for(let i=0 ; i< array1.length; i++ ) {

        if(removeDuplicates[array1[i]]) {

            duplicates.push(array1[i])

        }

        else {

            removeDupliactes.push(array1[i]) ;
            removeDuplicates[array1[i]] = true

        }

    }

    return removeDupliactes

}

console.log(findDuplicates([1,2,3,1,2]));

// map,filter,reduce

function mapDatas(a) {

    let array1 = a ;
    let array2 = [] ;

    for(let i=0; i< array1.length ; i++ ) {

        array2[i] = array1[i] * array1[i] ;

    }

    return array2

}

console.log(mapDatas([1,2,3,4]));

function filterDatas(a) {

    let array1 = a ;
    let array2 = [] ;

    for(let i=0; i< array1.length ; i++ ) {

        if(array1[i] > 1 ) array2.push(array1[i])

    }

    return array2

}

console.log(filterDatas([1,2,3,4]));

function reduceDatas(a) {

    let array1 = a ;
    let sum = 0 ;
    
    for(let i=0; i<array1.length ; i++ ) {

        sum += array1[i]

    }

    return sum

}

console.log(reduceDatas([1,2,3,4]));

function reduceMax(a) {

    let array1 = a ;
    let max = array1[0] ;


    for(let i=0; i<array1.length; i++  ) {

        
        if(array1[i] > max ) max = array1[i] ;
        

    }

    return max

} 

console.log(reduceMax([1,2,3,4]));


function totalChar(a) {

    let array1 = a ;
    let count = 0 ;

    for(let i=0; i<array1.length; i++ ) {

        count += array1[i].length 

    }

    return count

}

console.log(totalChar(["kishan","mistry"]));

function someFun(a) {

    let array1 = a ;
    let found = false
    for(let i=0 ; i< array1.length ; i++ ) {

        if(array1[i] < 0 ) {

            found = true ;
            break

        }

    }

    return found

}

console.log(someFun([1,2,3,4,-1]));


function everyFun(a) {

    let array1 = a ;
    let found = true ;
    for(let i=0 ; i< array1.length ; i++ ) {

        if(array1[i] >=0  ) {

            found =  false ;
            break

        }

    }

    return found

}

console.log(everyFun([1,2,3,4,-1]));


function findfirstEle(a) {

    let array1 = a ;
    let firstEle = 0 ; 

    for(let i=0 ; i< array1.length ; i++) {

        if(array1[i] % 2 === 0 ) {

            firstEle = array1[i] ; 
            break ;

        }

    }
    
    return firstEle

}

console.log(findfirstEle([1,2,3,4,5,6]));



function findfirstIndex(a) {

    let array1 = a ;
    let firstIndex = 1 ; 

    for(let i=0 ; i< array1.length ; i++) {

        if(array1[i] % 2 === 0 ) {

            firstIndex = i ; 
            break ;

        }

    }
    
    return firstIndex

}

console.log(findfirstIndex([1,2,3,4,5,6]));


function sortArrayAscending(a) {

    let array1 = a ;
    for(let i=0; i < array1.length ; i++) {

        for(let j= i+1 ; j < array1.length ; j++ ) {

            if(array1[i] > array1[j] ) {

                let t = array1[i] ;
                array1[i] = array1[j] ;
                array1[j] = t

            }

        }

    }

    return array1 


}

console.log(sortArrayAscending(["kishan","apple"]));





function sortArrayDescending(a) {

    let array1 = a ;
    for(let i=0; i < array1.length ; i++) {

        for(let j= i+1 ; j < array1.length ; j++ ) {

            if(array1[i] < array1[j] ) {

                let t = array1[i]
                array1[i] = array1[j] ;
                array1[j] = t
            }

        }

    }

    return array1 


}

console.log(sortArrayDescending(["apple","kishan"]));



