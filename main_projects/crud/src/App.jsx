import React from 'react'
import Form from './components/Form'
import Table from './components/Table'
import FilterContainer from './components/FilterContainer'

function App() {
  return (
    <>
      <div className='container my-4' >
        <Form />
        <FilterContainer />
        <Table />
      </div>

    </>
  )
}

export default App