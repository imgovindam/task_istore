import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"myData",
    initialState:{
 data:[]
    },
    reducers: {
        addMasterData:(state,action)=>{
            state.data=action.payload
        }
    }
 
})
//for exporting from
export const {addMasterData}=dataSlice.actions

export const dataReducer= dataSlice.reducer