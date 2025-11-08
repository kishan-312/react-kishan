import React, { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0)


  function incHandler() {



    setCount(count + 1)


  }

  function decHandler() {

    if (count > 0) {

      setCount(count - 1)

    }

  }

  return (
    <>
      <div className='container my-4' >
        <span> Count : {count} </span>
        <div className='d-flex gap-2' >
          <button className='btn btn-primary' onClick={incHandler} >Increment</button>
          <button className='btn btn-info' onClick={decHandler} >Decrement</button>
          <button className='btn btn-danger' onClick={() => setCount(0)} >Reset</button>
        </div>
      </div>
    </>
  )
}

export default Counter