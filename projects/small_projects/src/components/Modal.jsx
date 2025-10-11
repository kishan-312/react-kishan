import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModal,
  toggleModal,
} from "../features/modals/modalSlice";

const Modal = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" container mt-5">
        <div className=" d-flex gap-4">
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(openModal())}
          >
            Open Modal
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(toggleModal())}
          >
            Toggle
          </button>
        </div>
        {isOpen && (
          <div
            className="modal fade show d-block"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal</h5>
                  <button
                    className="btn-close"
                    onClick={() => dispatch(closeModal())}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, omnis!
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => dispatch(closeModal())}
                  >
                    close
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(toggleModal())}
                  >
                    Toggle
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
