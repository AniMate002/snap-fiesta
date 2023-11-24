import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./Slices/imageSlice";
import userSlice from "./Slices/userSlice";


const store = configureStore({
    reducer:{
        images: imageSlice,
        user: userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store