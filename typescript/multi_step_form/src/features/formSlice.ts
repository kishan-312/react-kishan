import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Steps {

    name : string ;
    email :  string ;
    file : File | null ;
    preview : string | null;

}

const steps : Steps = {

    name : "",
    email : "",
    file :  null,
    preview : null,

}

const initialState = {

    steps

}

 const FormSlice = createSlice({

    name : "form",
    initialState,
    reducers : {

        setInitialState : (state,action : PayloadAction<Partial <Steps> > ) => {

            state.steps = {...state.steps, ...action.payload}

        },

        deleteFile : (state) => {

            if(state.steps.preview) {

                URL.revokeObjectURL(state.steps.preview)

            }

            state.steps.file = null ;
            state.steps.preview = null

        }


    }

})


export default FormSlice.reducer 
export const { setInitialState, deleteFile } = FormSlice.actions


