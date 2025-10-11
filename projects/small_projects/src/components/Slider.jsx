import img1 from "../assets/images/slider/sale1.jpg";
import img2 from "../assets/images/slider/sale2.jpg";
import img3 from "../assets/images/slider/sale3.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  nextSlide,
  prevSlide,
  setCurrentIndex,
} from "../features/slider/sliderSlice";
import { useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const imgLists = [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: img2,
  },
  {
    id: 3,
    imgSrc: img3,
  },
];

const Slider = () => {
  const { currentIndex } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide(imgLists.length));
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch, currentIndex]);

  return (
    <>
      <div className="container my-4">
        {/* slider */}
        <div
          style={{
            width: "100%",
            height: "600px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            key={imgLists[currentIndex].id}
            style={{ width: "100%", height: "100%" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={imgLists[currentIndex].imgSrc}
              alt=""
            />
          </div>

          <button
            className="btn btn-secondary"
            style={{ position: "absolute", top: "50%", left: "10px" }}
            onClick={() => dispatch(prevSlide(imgLists.length))}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <button
            className="btn btn-secondary"
            style={{ position: "absolute", top: "50%", right: "10px" }}
            onClick={() => dispatch(nextSlide(imgLists.length))}
          >
            <MdOutlineKeyboardArrowRight />
          </button>

          {/* dots */}
          <div
            className=""
            style={{
              display: "flex",
              position: "absolute",
              bottom: "10px",
              left: "50%",
              gap: "20px",
            }}
          >
            {imgLists.map((_, index) => (
              <span
                style={{
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                className={`${currentIndex === index ? "bg-info" : "bg-dark"} `}
                key={index}
                onClick={() => dispatch(setCurrentIndex(index))}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
