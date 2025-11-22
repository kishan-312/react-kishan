import { Link } from "react-router-dom"
import logo from "../../assets/images/logos/logo_shop.png"
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import DarkMode from "../theme/DarkMode"


function Navbar_upper() {
  return (
    <div className=" w-full bg-[#fab650] py-3" >
        {/* container */}
        <div className="container flex justify-between" >
            {/* links Img */}
            <div>
                <Link to={"/"} className=" flex items-center gap-2 font-bold text-2xl sm:text-3xl" >
                    <img src={logo} alt="eshop" className=" w-10" />
                    Shopsy
                </Link>
            </div>
            {/* searchbar and order button */}
            <div className=" flex gap-4 items-center justify-between" >
               <div className="group relative hidden sm:block" >
                 <input type="text" placeholder="...Search" className="cursor-pointer w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 ease-in-out rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-orange-400 " />
                 <IoMdSearch className="text-gray-500 hover:text-amber-600 absolute right-3 top-1/2 -translate-y-1/2" />
               </div>
                <button className="bg-linear-to-r from-amber-600 to-amber-500 transition-all duration-200 ease-in-out text-white py-1 px-4 rounded-full flex items-center gap-3 group " >
                    <span className="group-hover:block hidden transition-all duration-200" >Order</span>
                    <FaCartShopping className=" text-xl text-white cursor-pointer drop-shadow-sm" />
                </button>
                <div className="" >
                    <DarkMode/>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Navbar_upper