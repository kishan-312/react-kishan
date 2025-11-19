import React, { useEffect } from 'react'
import logo from "../assets/images/logos/logo2.png"
import { Link, NavLink } from 'react-router-dom'
import "../css/header.css"
import { IoMdMenu } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { IoClose } from 'react-icons/io5'
import { setIsOpen, setOpenDropdown, toggleMenu } from '../features/header/headerSlice'


const navLinkDatas = [

    {

        name : "services",
        class : "nav-link",
        dropDown : [

           {

            title : "custom software development"

           },
           {

            title : "web development"

           },
           {

            title : "dedicated development team"

           },
           {

            title : "ai development"

           },
           {

            title : "software product development"

           },
           {

            title : "ecommerce development"

           },
           {

            title : "mobile app development"

           },
           {

            title : "software testing & qa"

           },
           {

            title : "ui/ux design"

           },

        ]

    },
    {

        name : "technologies",
        class : "nav-link",
        dropDown : [

            {

                title : "backend",
                childrens : [
                    ".net",
                    "java",
                    "node js",
                    "php",
                    "ror",
                    "python"

                ]

            },

            {

                title : "frontend",
                childrens : [
                    "angular",
                    "react",
                    "vue js",
                   

                ]

            },
            {

                title : "mobile",
                childrens : [
                    "ios",
                    "android",
                    "react native",
                    "flutter",
                   

                ]

            },
            {

                title : "others",
                childrens : [
                    "sharepoint",
                    "cloud & devops",

                ]

            },

        ]

    },
    {

        name : "industries",
        class : "nav-link",
          dropDown : [

           {

            title : "finance"

           },
           {

            title : "insurance"

           },
           {

            title : "education"

           },
           {

            title : "energy and utilities"

           },
           {

            title : "healthcare"

           },
     

        ]


    },
    {

        name : "portfolio",
        class : "nav-link",
        dropDown : []

    },
    {

        name : "insights",
        class : "nav-link",
        dropDown : []


    },
    {

        name : "about",
        class : "nav-link",
        dropDown : [

            {

                title : "about us"

            },
            {

                title : "career"

            },
            {

                title : "our team"

            },

        ]


    },
    {

        name : "contact",
        class : "nav-link-btn",
        dropDown : []

    },

]



function Header() {

    const { isOpen, openDropdown } = useSelector((state) => state.header )
    const dispatch = useDispatch()

    useEffect(() => {

        function scrollY() {

            const header = document.querySelector(".header") ;

            if(window.scrollY > 50) {

                header.classList.add("active")

            }

            else {

                header.classList.remove("active")

            }


        }

        function resizeFun() {

            if(window.innerWidth > 576) {

               dispatch( setIsOpen(false))

            }

        }

        window.addEventListener("scroll" , scrollY )
        window.addEventListener("resize", resizeFun )

        return () => {
            window.removeEventListener("scroll" , scrollY )
            window.removeEventListener("resize" , resizeFun)

        }

    }, [dispatch] )

    useEffect(() => {

        if(isOpen) {

            document.body.style.overflow = "hidden"

        }

        else {

            document.body.style.overflow = "auto"


        }


    }, [isOpen] )



  return (
    <>
        <header className='header' >
            <div className='logoContainer' >
               <Link to={"/"} > <img src={logo} alt="tatva Soft" /></Link>
            </div>
            <nav className='nav' >
                <ul className='ul' >
                    
                    {

                    navLinkDatas.map((data) => 

                    <li className='nav-item' >

                        <NavLink className={data.class} to={`/${data.name}`} >{data.name.toUpperCase()}</NavLink>

                        {

                            data.dropDown.length > 0 && (

                              <ul className='dropdown' >
                                    <div className='dropdown-item-container' >
                                        {

                                        data.dropDown.map((item) => <li className={`dropdown-item ${item.childrens ? "has-children" : "no-children"  }`} >

                                            {

                                                !item.childrens && <Link to={`/${item.title}`} >{item.title}</Link>

                                            }
                                            
                                            {

                                                item.childrens && (

                                                        <>
                                                            <p className='dropdown-title' > {item.title} </p>
                                                            <ul className='dropdown-children' >
                                                                {
                                                                    item.childrens.map((child) => <li>
                                                                        <Link to={`/${child}`} >{child}</Link>
                                                                    </li> )

                                                                }
                                                            </ul>
                                                        </>
                                                )

                                            }

                                        </li>  )

                                        }
                                    </div>
                                    

                              </ul>

                            )

                        }

                    </li>
                    


                     )

                    }
                </ul>  

                {

                    isOpen ? ""  : <IoMdMenu className='menu' onClick={() => dispatch(toggleMenu()) }  />

                }
                
                <ul className={`ul2 ${isOpen ? "active" : "" }`} >
                   <div className='logoSmallScreenContainer' >
                     <div className='logoContainer' >
                         <Link to={"/"} > <img src={logo} alt="tatva Soft" /></Link>
                     </div>
                     {
                         isOpen ? <IoClose className='menu'  onClick={() => dispatch(toggleMenu()) } />  : <IoMdMenu className='menu'  onClick={() => dispatch(toggleMenu()) } />  
                     }
                   </div>
                    <div className=' ul2Data' >
                            {

                             navLinkDatas.map((data,index) => 
                             <div className='containerPlusMinus' >
                               <div className='plusMinusContainer' >
                                 <NavLink className={data.class} to={`/`} >{`${data.name.toUpperCase()}`}  </NavLink>
                                <span className='plusMinus' onClick={() => dispatch(setOpenDropdown(index)) } >{data.dropDown.length > 0 ? openDropdown === index ? "-" : "+"  : "" }</span>
                               </div>
                                {

                                    openDropdown === index && data.dropDown.length > 0 && <ul className='mobile-dropdown' >
                                            {


                                                data.dropDown.map((item) => <li  >
                                                    {

                                                        !item.childrens ? <Link to={"/"} > { item.title } </Link> :  <>
                                                            <p className='dropdown-title'>{item.title}</p>
                                                            <ul className='dropdown-children'>
                                                                {item.childrens.map((child, cidx) => (
                                                                <li key={cidx}>
                                                                    <Link to={`/${child}`}>{child}</Link>
                                                                </li>
                                                                ))}
                                                            </ul>
                </>

                                                    }
                                                </li> )
                                            }

                                    </ul>

                                }

                             </div>

                      
                            
                            )

                        }
                    </div>   
                </ul>

            </nav>
        </header>

    </>
  )
}

export default Header