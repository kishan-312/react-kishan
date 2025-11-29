import { useDispatch, useSelector } from "react-redux"
import InputBox from "./components/InputBox"
import type { RootState } from "./app/store"
import { deleteFile, setInitialState } from "./features/formSlice";
import type React from "react";
import { useRef } from "react";

function App() {

  const { steps } = useSelector((state : RootState ) => state.form ) ;
  const dispatch = useDispatch()

  const fileRef = useRef<HTMLInputElement | null>(null)

  function handleChange(e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement > ,stateIndex ?: number ) {

    const { name,value, type, files } = e.target 
    

    if(type === "file") {

      const file = files?.[0] || null ;
      const preview = file ? URL.createObjectURL(file) : null ;

      dispatch(setInitialState({ file, preview }))

    }

    

    else {

        dispatch(setInitialState({[name] : value }))

    }


  }

  function handleDeleteFile() {

    dispatch(deleteFile())

    if(fileRef.current) {

      fileRef.current.value = ""

    }
    

  }

  return (
    <>
        <form action="" className=" border border-gray-600 p-4 m-12" >
          <div className="" >
              <InputBox label="name" name="name" onChange={handleChange} value={steps.name} />
              <InputBox label="email" name="email" onChange={handleChange} value={steps.email} />
          </div>
          <div>
            <input type="file"  ref={fileRef}  className=" border border-gray-400 p-3" name="file" onChange={handleChange} />
            {

              steps.file && steps.preview && (

                <div className="mt-4 border p-4 rounded">
                    <p className=" mb-2 font-medium" > { steps.file.name } </p>

                    {

                      steps.file.type.startsWith("image/") && (

                        <img src={steps.preview} className=" m-10" alt="" />

                      )

                    }

                    <button onClick={handleDeleteFile } >Delete</button>

                </div>

              )

            }

          </div>

        </form>
    
    </>
  )
}

export default App