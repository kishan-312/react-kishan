import  React from "react";

export interface InputBoxStates {

    label : string ;
    name : string ;
    value : string ;
    onChange : ( e : React.ChangeEvent<HTMLInputElement> ) => void

}


function InputBox({label,name,value,onChange} : InputBoxStates ) {
  return (
    <>
    
        <div className=" flex flex-col gap-2" >
            <label htmlFor="">{label}</label>
            <input type="text" className=" border border-gray-400 focus:outline-none" name={name} value={value} onChange={onChange} placeholder=""  />
        </div>

    </>
  )
}

export default InputBox