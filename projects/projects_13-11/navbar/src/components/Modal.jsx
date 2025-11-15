import React from 'react'
import styles from "../css/modal.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, toggleModal } from '../features/modal/modalSlice'

function Modal() {

    const { isOpen } = useSelector((state) => state.modal)
    const dispatch = useDispatch()

    return (
        <>
            <div className={styles.mtop} >
                <button onClick={() => dispatch(toggleModal())} > Open </button>
                {
                    isOpen &&
                    <div class="modal d-block fade show" tabindex="-1" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={() => dispatch(closeModal())} aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => dispatch(closeModal())} >Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
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