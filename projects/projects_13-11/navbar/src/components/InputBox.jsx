import { useSelector } from "react-redux"
import styles from "../css/crud.module.css"

function InputBox({ name, type, handleChange, value, errors }) {


    return (
        <>
            <div className='d-grid gap-2' >
                <label htmlFor={name} className='form-label'>{name.charAt(0).toUpperCase() + name.slice(1) + ":"}</label>
                <input type={type} id={name} name={name} value={value[name]} onChange={handleChange} className={`form-control ${styles.input}`} placeholder={`Enter Your ${name}`} />
                {

                    errors && <small style={{ color: "red" }} > {errors[name]} </small>

                }
            </div>

        </>
    )
}

export default InputBox