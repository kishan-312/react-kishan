import { useEffect, useState } from "react";
import SalesTimer from "../components/SalesTimer";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { displayProducts } from "../features/products/productsSlice";
import Slider from "../components/Slider";
import BrowseByCategory from "../components/BrowseByCategory";

const Home = () => {
  const { datas } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(datas);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(displayProducts());
  }, [dispatch]);

  const displayedProducts = showAll ? datas : datas.slice(0, 4);
  const [year, setYear] = useState(new Date());

  return (
    <>
      <div className="main home">
        <Slider />
        <div className="products ">
          <SalesTimer saleName={"Flash Sales"} />
          <div className="productsData container">
            {displayedProducts.map((data) => (
              <div className="card" key={data.id}>
                <figure>
                  <img src={data.image} alt="" />
                  <p className="addToCart">Add To Cart</p>
                </figure>
                <div className="productDescription">
                  <h5>{data.title}</h5>
                  <div>
                    <span className="productPrice"> ${data.price} </span>
                    <span className="productPrice2"> ${data.price} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="showDataButton"
          >
            {showAll ? "view Less" : "view All Products"}{" "}
          </button>
        </div>
        <BrowseByCategory categoryName={"Browse By Category"} />
        <footer>
          <div className="container footer">
            <p> @{year.getFullYear()} kismicode. All rights reserved </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
