import cardImg from '../assets/cart.jpg'


function Card({message,dataFun}) {

    const message2 = "hello kishan"

  return (

    <div>
        <img src={cardImg} alt="" width={100} height={100} />
        <p>{message}</p>

        <button onClick={() => dataFun(message2) } > Click </button>
    </div>

  )
}

export default Card
