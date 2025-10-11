import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = ({ setCurrentPage, totalPages, currentPage }) => {
  return (
    <>
      <div className=" w-50 my-4 d-flex justify-content-center gap-4 mx-auto">
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <GrPrevious />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            className={` btn ${
              currentPage === i + 1
                ? "btn-secondary"
                : "btn-light border border-1"
            } `}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-primary"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <GrNext />
        </button>
      </div>
    </>
  );
};

export default Pagination;
