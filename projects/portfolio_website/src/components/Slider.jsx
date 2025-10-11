import { useDispatch, useSelector } from "react-redux";
import img1 from "../assets/slider_sale/sale1.jpg";
import img2 from "../assets/slider_sale/sale2.jpg";
import img3 from "../assets/slider_sale/sale3.jpg";
import "../css/slider.css";
import { useEffect } from "react";
import { setCurrentSlider } from "../features/slider/sliderSlice";

const sliderData = [
  {
    id: 1,
    img: img1,
  },

  {
    id: 2,
    img: img2,
  },

  {
    id: 3,
    img: img3,
  },
];

const Slider = () => {
  const { currentSlider } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setCurrentSlider((currentSlider + 1) % sliderData.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch, currentSlider]);

  return (
    <>
      <div className="slider container">
        {sliderData.map((ele, index) => (
          <div
            className={`slide ${currentSlider === index ? "active" : ""} `}
            key={ele.id}
          >
            <img src={ele.img} alt="" />
          </div>
        ))}

        <div className="dots">
          {sliderData.map((_, index) => (
            <span
              className={`dot ${index === currentSlider ? "active-dot" : ""} `}
              onClick={() => dispatch(setCurrentSlider(index))}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
