import { useState } from 'react'

const Counter = () => {

    const [counter,setCounter] = useState(0) ;

  return (
    <>
      <div>
        <p>Counter : {counter} </p>
        <button onClick={() => setCounter(prev => prev+1) } >Inc</button>
        <button onClick={() => setCounter(prev => prev-1) } >dec</button>
      </div>
    </>
  )
}

export default Counter
