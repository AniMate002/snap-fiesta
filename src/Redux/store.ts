import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./Slices/imageSlice";


const store = configureStore({
    reducer:{
        images: imageSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store