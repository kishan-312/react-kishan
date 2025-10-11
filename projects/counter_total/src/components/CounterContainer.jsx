import { useState } from "react"
import CounterBasket from "./CounterBasket"
import CounterButton from "./CounterButton"

const CounterContainer = () => {

    const [firstCounter,setFirstCounter] = useState(100)
    const [secondCounter,setSecondCounter] = useState(0)

    function clickHandler1(e) {

        console.log(e);
        
       if(secondCounter > 0) {

        setSecondCounter(prev => prev - 1 );
        setFirstCounter(prev => prev + 1 );
        // setSecondCounter(secondCounter - 1);
        // setFirstCounter(firstCounter + 1);

       }

    }

    function clickHandler2() {

        if(firstCounter > 0) {

        // setFirstCounter(firstCounter - 1);
        // setSecondCounter(secondCounter + 1);
        setFirstCounter(prev => prev - 1 );
        setSecondCounter(prev => prev + 1 );

        }

    }

    
  return (
    <>
        <div className="container d-flex gap-3" >
            <CounterBasket $basketText={"Basket 1"} $basketCount={firstCounter}  />
            <CounterButton $btnText={"<"} $className={"btn btn-primary"} $disabled={firstCounter === 100} $onClick={clickHandler1} />
            <CounterButton $btnText={">"} $className={"btn btn-primary"} $disabled={secondCounter === 100} $onClick={clickHandler2} />
            <CounterBasket $basketText={"Basket 2"} $basketCount={secondCounter}   />
        </div>
    </>
  )
}

export default CounterContainer
