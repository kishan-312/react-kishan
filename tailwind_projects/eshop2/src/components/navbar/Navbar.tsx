import Navbar_lower from "./Navbar_lower"
import Navbar_upper from "./Navbar_upper"

function Navbar() {
  return (
    <>
       <div className=" bg-white dark:bg-gray-900 dark:text-white shadow z-40 transition-all duration-200 relative" >
         <Navbar_upper/>
         <Navbar_lower/>
       </div>
    </>
  )
}

export default Navbar