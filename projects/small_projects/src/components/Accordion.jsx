import { useDispatch, useSelector } from "react-redux";
import { toggleIndex } from "../features/accordion/accordionSlice";

const accordionDatas = [
  {
    que: "que1",
    ans: "ans1",
  },
  {
    que: "que2",
    ans: "ans2",
  },
  {
    que: "que3",
    ans: "ans3",
  },
];

const Accordion = () => {
  const { openIndex } = useSelector((state) => state.accordion);
  const dispatch = useDispatch();

  function handleClick(index) {
    dispatch(toggleIndex(index));
  }

  return (
    <>
      <div className=" my-4 mx-auto w-50 d-grid gap-3">
        {accordionDatas?.length > 0 ? (
          accordionDatas?.map((data, index) => (
            <div key={index}>
              <button
                className="w-100 btn btn-primary text-white d-flex justify-content-between"
                onClick={() => handleClick(index)}
              >
                <span> {data.que} </span>
                <span> {openIndex === index ? "-" : "+"} </span>
              </button>
              {openIndex === index ? (
                <div>
                  <span> {data.ans} </span>
                </div>
              ) : (
                ""
              )}
            </div>
          ))
        ) : (
          <span>No Accordion data available</span>
        )}
      </div>
    </>
  );
};

export default Accordion;
