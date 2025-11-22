import { Link } from "react-router-dom"
import logo from "../../assets/images/logos/logo_shop.png"
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import Theme from "../theme/Theme"


function Navbar_upper() {
  return (
    <>
       <div className=" w-full bg-amber-400 py-3" >
            <div className="container w-full flex justify-between" >
                <div>
                    <Link to={"/"} className=" flex gap-2 items-center font-bold text-2xl sm:text-3xl" >
                        <img src={logo} alt="eshop" className=" w-10" />
                        <span>Eshop</span>
                    </Link>
                </div>
                <div className=" flex items-center gap-2 justify-between" >
                    <div className=" relative group hidden sm:block" >
                        <input type="text" placeholder="Search..." className="w-[200px] sm:w-[200px] group-hover:w-[300px] focus:outline-none focus:border focus:border-orange-500 rounded-full cursor-pointer px-2 py-1 transition-all duration-300 ease-in-out border border-gray-300" />
                        <IoMdSearch className=" text-gray-500 hover:text-amber-600 transition-all duration-300 ease-in-out absolute top-1/2 -translate-1/2 right-3" />
                    </div>
                    <button className="group bg-linear-to-r from-amber-600 to-amber-500 
                    transition-all duration-300 ease-in-out px-4 py-1
                     rounded-full text-white flex items-center gap-3" >
                        <span className="hidden group-hover:block transition-all duration-300 ease-in-out" >Order</span>
                        <FaCartShopping className=" text-xl text-white cursor-pointer drop-shadow-sm" />
                    </button>
                    <div>
                        <Theme/>
                    </div>
                   
                </div>
                 
            </div>
        </div> 
    </>
  )
}

export default Navbar_upper