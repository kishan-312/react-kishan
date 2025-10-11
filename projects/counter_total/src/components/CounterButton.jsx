
const CounterButton = ({$className,$btnText,$onClick,$disabled}) => {
  return (
    <>
      <button className={$className} onClick={$onClick} disabled={$disabled} > {$btnText} </button>
    </>
  )
}

export default CounterButton
