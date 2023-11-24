import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import { userI } from "../types";
import axios from "axios";
import { act } from "react-dom/test-utils";

interface UserInitialStateI {
    isAuth: boolean
    user: userI
    isLoading: boolean
    error: string | null
}

const BASE_URL: string = 'https://api.escuelajs.co/api/v1/users/'

const initialState: UserInitialStateI = {
    isAuth: false,
    user: {},
    isLoading: false,
    error: null
}


export const createUser = createAsyncThunk<userI, userI, {rejectValue: string}>('user/createUser', async (user: userI, {rejectWithValue}) => {
    try {
        const newUser:userI = {
            ...user
        }
        const res = await axios.post(BASE_URL, newUser)
        const data = res.data as userI
        console.log(data)
        if(!data)
            throw new Error('error')
        return data as userI

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error has accured'
        return rejectWithValue(errorMessage)
    }
})

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(createUser.fulfilled, (state, action) => {
            state.isAuth = true
            state.user = action.payload
            state.error = null
            state.isLoading = true
        })
        .addCase(createUser.pending, (state, action) => {
            state.error = null
            state.isLoading = true
        })
    }

})


export default userSlice.reducer
