import { useDispatch, useSelector } from "react-redux";
import { setOpenTab } from "../features/tabs/tabsSlice";

const tabsData = [
  {
    label: "label1",
    content: "label1 content",
  },
  {
    label: "label2",
    content: "label2 content",
  },
  {
    label: "label3",
    content: "label3 content",
  },
];

const Tabs = () => {
  const { openTab } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  function handleClick(index) {
    dispatch(setOpenTab(index));
  }

  return (
    <>
      <div className=" container my-4">
        <ul className=" nav nav-tabs">
          {tabsData.map((data, index) => (
            <li className="nav-item">
              <button
                className={`nav-link ${openTab === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                {" "}
                {data.label}{" "}
              </button>
            </li>
          ))}
        </ul>

        <div className=" w-100">
          <span> {tabsData[openTab].content} </span>
        </div>
      </div>
    </>
  );
};

export default Tabs;
