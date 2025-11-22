import { Link } from "react-router-dom"
import logo from "../../assets/images/logos/logo_shop.png"
import { IoMdClose, IoMdMenu, IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import Theme from "../theme/Theme"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { closeIsOpen, setIsOpen } from "../../features/navbar/navbarSlice"
import { useEffect } from "react"


function Navbar_upper() {

    const { isOpen } = useSelector((state : RootState ) => state.navbar )
    const { cart } = useSelector((state : RootState) => state.cart )
    const dispatch =  useDispatch()
    console.log(cart);
    

    useEffect(() => {

       function handleResize() {

        if(window.innerWidth > 1024) {

            dispatch(closeIsOpen())

        }

       }

    window.addEventListener("resize" , handleResize )

    return () => window.removeEventListener("resize", handleResize)

    }, [dispatch] )

  return (
    <>
       <div className=" w-full bg-amber-400 py-3 fixed top-0 left-0 z-20 h-[90px] flex items-center" >
            <div className="container w-full flex justify-between " >
                <div>
                    <Link to={"/"} className=" flex gap-2 items-center font-bold text-2xl sm:text-3xl" >
                        <img src={logo} alt="eshop" className=" w-10" />
                        <span>Eshop</span>
                    </Link>
                </div>
                <div className=" flex items-center gap-2 justify-between" >
                    <div className=" relative group hidden sm:block" >
                        <input type="text" placeholder="Search..." className="w-[200px] sm:w-[200px] group-hover:w-[300px] focus:outline-none focus:border focus:border-orange-500 rounded-full cursor-pointer px-2 py-1 transition-all duration-300 ease-in-out border border-gray-300" />
                        <IoMdSearch className=" text-gray-500 hover:text-amber-600 transition-all duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 right-3" />
                    </div>
                    <Link to={"/electronics"} className="group bg-linear-to-r from-amber-600 to-amber-500 
                    transition-all duration-300 ease-in-out px-4 py-1
                     rounded-full text-white flex items-center gap-3" >
                        <span className="hidden group-hover:block transition-all duration-300 ease-in-out" >Order</span>
                        <FaCartShopping className=" text-xl text-white cursor-pointer drop-shadow-sm" />
                        <span className=" text-white" >{cart.length}</span>
                    </Link>
                    <div>
                        <Theme/>
                    </div>
                   
                   
                </div>
                 <div className=" md:hidden flex items-center" >
                    <IoMdMenu className=" text-2xl cursor-pointer" onClick={() => dispatch(setIsOpen()) } />
                </div>
            </div>
        </div> 
        {

            isOpen &&
            <div className={`fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-white dark:bg-gray-900 z-30 transform transition-transform duration-300  ${isOpen ? "translate-x-0" : "translate-x-full" }`} >
                <IoMdClose className="fixed right-4 top-4 text-2xl cursor-pointer" onClick={() => dispatch(closeIsOpen()) } />
            </div>

        }

    </>
  )
}

export default Navbar_upper