import React, { useEffect, useState } from "react";
import "../css/browseByCategory.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import mensImg from "../assets/category_images/mens_clothing.jpg";
import womensImg from "../assets/category_images/womens_clothing.jpg";
import jewellery from "../assets/category_images/jewellery.jpg";
import electronics from "../assets/category_images/electronics.jpg";

const BrowseByCategory = ({ categoryName }) => {
  const { datas } = useSelector((state) => state.products);
  const categoryLists = [...new Set(datas.map((data) => data.category))];
  console.log(categoryLists);
  const categories = [
    {
      id: 1,
      name: categoryLists[0],
      img: mensImg,
    },

    {
      id: 2,
      name: categoryLists[1],
      img: jewellery,
    },

    {
      id: 3,
      name: categoryLists[2],
      img: electronics,
    },

    {
      id: 4,
      name: categoryLists[3],
      img: womensImg,
    },
  ];
  console.log(categories);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCategories, setVisibleCategories] = useState(3);

  useEffect(() => {
    function updateVisible() {
      if (window.innerWidth < 576) {
        setVisibleCategories(1);
      } else if (window.innerWidth < 768) {
        setVisibleCategories(2);
      } else {
        setVisibleCategories(3);
      }
    }

    updateVisible();

    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  function handlePrev() {
    setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
  }

  function handleNext() {
    setStartIndex((prev) => (prev + 1) % categories.length);
  }

  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].clientX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      // swipe left → next
      handleNext();
    }
    if (touchEndX - touchStartX > 50) {
      // swipe right → prev
      handlePrev();
    }
  }

  return (
    <>
      <div className="container categoryContainer">
        <div className="category-heading">
          <p className="category-style"></p>
          <p>Categories</p>
        </div>
        <div className="arrow-heading">
          <h1>{categoryName}</h1>
          <div className="arrows">
            <div className="round">
              <FaArrowLeftLong className="arr" onClick={handlePrev} />
            </div>
            <div className="round">
              <FaArrowRightLong className="arr" onClick={handleNext} />
            </div>
          </div>
        </div>
        <div
          className="categoryCardContainer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {Array.from({ length: visibleCategories }, (_, i) => {
            const index = (startIndex + i) % categories.length;
            const ele = categories[index];

            return (
              <div className="categoryCard" key={ele.id}>
                <span>{ele.name}</span>
                <img src={ele.img} alt={ele.name} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BrowseByCategory;
