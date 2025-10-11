function container() {
    
    const $firstEle = document.querySelector(".firstTxt");
    const $secondEle = document.querySelector(".secondTxt");
    

    let total = 100 ;
    let second = 0;
    let first = total - second;

    $firstEle.innerHTML = first;
    $secondEle.innerHTML = second;

    const $firstBtn = document.querySelector(".firstBtn") ;
    const $secondBtn = document.querySelector(".secondBtn") ;

    $firstBtn.addEventListener("click" , function() {

        if(second > 0) {

            second-- ;
            $secondEle.innerHTML = second;
            first++ ;
            $firstEle.innerHTML = first;


        }
    } )

    $secondBtn.addEventListener("click" , function() {

        if(first > 0) {

            first-- ;
            $firstEle.innerHTML = first;
            second++ ;
            $secondEle.innerHTML = second;

        }

    } )





}

container()

