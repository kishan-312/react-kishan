import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../app/store"
import { loadProducts } from "../features/products/productsSlice"
import ProductOne from "../components/Products/ProductOne"

function Home() {

    const { products } = useSelector((state : RootState ) => state.products )
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(loadProducts())

    }, [dispatch] )

  return (
    <>
        <div className=" mt-[200px] grid grid-cols-3 gap-2 p-3" >
            {

                products?.products?.map((p) => <ProductOne product={p} />  )

            }
        </div>
    </>
  )
}

export default Home