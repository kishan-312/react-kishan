import Card from "./components/Card"

const App = () => {

  const dataFun = (data) => {

    console.log(data);

  }


  return (
    <>
      <div>
        <Card message={"hello"} dataFun={dataFun} />

      </div>
    </>
  )
}

export default App
