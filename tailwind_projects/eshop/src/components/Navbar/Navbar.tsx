import Navbar_lower from "./Navbar_lower"
import Navbar_upper from "./Navbar_upper"

function Navbar() {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40" >
        {/* navbar_upper */}
        <Navbar_upper/>
        {/* navbar_upper */}
        <Navbar_lower/>
      </div>
    </>
  )
}

export default Navbar