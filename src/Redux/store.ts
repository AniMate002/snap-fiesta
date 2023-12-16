import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./Slices/imageSlice";
import userSlice from "./Slices/userSlice";
import artistsSlice from "./Slices/artistsSlice";


const store = configureStore({
    reducer:{
        images: imageSlice,
        user: userSlice,
        artists: artistsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store