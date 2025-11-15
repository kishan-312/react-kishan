import { Outlet } from 'react-router-dom'
import Accordion from './components/Accordion'
import Counter from './components/Counter'
import Crud from './components/Crud'
import Crud_api from './components/Crud_api'
import Modal from './components/Modal'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <Accordion /> */}
      {/* <Tabs /> */}
      {/* <Modal /> */}
      <Crud />
      {/* <Crud_api /> */}
      {/* <Navbar /> */}
      {/* <Navbar /> */}
      {/* <Outlet /> */}
    </>
  )
}

export default App