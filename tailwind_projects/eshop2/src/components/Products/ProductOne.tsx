import { useDispatch } from "react-redux";
import { addData } from "../../features/cart/cartSlice";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    [key : string] :  any ;
  }; 
}

function ProductOne({product} : ProductProps) {

    console.log(product);
    const dispatch = useDispatch()
    

  return (
    <>  
        <div className=" mt-5 border border-gray-700 rounded-2xl p-7" >
            <img src={product.images[0]} alt="" />
            <div  >
                <h4>{product.title}</h4>
                <p>${product.price}</p>
            </div>
            <button className=" bg-blue-700 text-white p-3 cursor-pointer active:scale-105" onClick={() => dispatch(addData(product)) } >Add To Cart</button>
        </div>
    </> 
  )
}

export default ProductOne