import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./navSlice";


const store = configureStore({
    reducer: {
        app : appSlice,
        
    }

})

export default store;