
const CounterBasket = ({$basketText,$basketCount}) => {
  return (
    <>
      <div>
        <span>{$basketCount}</span>
        <p>{$basketText}</p>
      </div>
    </>
  )
}

export default CounterBasket
