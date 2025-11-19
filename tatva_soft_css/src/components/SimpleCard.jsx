import React from 'react'
import "../css/card.css"

function SimpleCard({data,cardText}) {
  return (
    <>
        <div className='border-b' >
           <div className='card' >
             <span className='card-data' >{data}+</span>
             <p> {cardText} </p>
           </div>
        </div>
    </>
  )
}

export default SimpleCard