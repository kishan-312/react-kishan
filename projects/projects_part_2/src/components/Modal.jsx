import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeHandler, openHandler, toggleHandler } from '../features/modal/modalSlice'

function Modal() {

    const { isOpen } = useSelector((state) => state.modal)
    const dispatch = useDispatch()

    return (
        <>
            <div className='container my-4' >
                <div className=' d-flex gap-4' >
                    <button className=' btn btn-primary' onClick={() => dispatch(openHandler())} >Open</button>
                    <button className='btn btn-primary' onClick={() => dispatch(toggleHandler())} >Toggle</button>
                </div>
                {

                    isOpen && <div className="modal d-block fade show" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => dispatch(closeHandler())} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => dispatch(closeHandler())} data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </div>

        </>
    )
}

export default Modal