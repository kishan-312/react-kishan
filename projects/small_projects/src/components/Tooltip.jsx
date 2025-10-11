import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideTooltip, showTooltip } from "../features/tooltip/tooltipSlice";

const Tooltip = () => {
  const { show } = useSelector((state) => state.tooltip);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container my-4 text-center">
        <button
          className="btn btn-info position-relative"
          onMouseEnter={() => dispatch(showTooltip())}
          onMouseLeave={() => dispatch(hideTooltip())}
        >
          Hover me
          {show && (
            <span
              className="position-absolute bg-dark text-white p-2 rounded"
              style={{
                top: "35px",
                left: "50%",
                transform: "translateX(60%)",
              }}
            >
              Tooltip
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default Tooltip;
