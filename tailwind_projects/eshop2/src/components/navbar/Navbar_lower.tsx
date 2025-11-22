import { Link } from "react-router-dom"
import datas from "../../mock_datas/navbarDatas.ts"

function Navbar_lower() {
  return (
    <>
     <div  className=" w-full bg-white py-3 dark:bg-gray-900 dark:text-white hidden md:block fixed top-[90px] left-0" >
        <div className="w-full container flex justify-center" >
            <nav>
                <ul className=" flex items-center gap-6" >
                   {

                    datas.map((data) =>  <li key={data.id} className=" group" > 
                             <Link to={data.path} className=" group-hover:text-amber-500 transition-all duration-300 ease-in-out font-medium" > {data.name.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ") } </Link> 
                    </li> )

                   }
                </ul>
            </nav>
        </div>
     </div>
    </>
  )
}

export default Navbar_lower