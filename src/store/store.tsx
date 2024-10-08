import { configureStore } from "@reduxjs/toolkit";
import fileSlice from "./fileSlice";

let store = configureStore({
    reducer: {
        fileSlice: fileSlice,
    }
})

export default store;