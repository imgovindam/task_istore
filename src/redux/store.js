import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataSlice";


 const store = configureStore({
    reducer:{
        myStore: dataReducer,
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    },


});

export default store 

//the store in redux is read only , and the only way to change it is by dispatching actions.