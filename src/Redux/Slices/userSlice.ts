import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import { formLogInI, userI } from "../types";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { addAbortSignal } from "stream";
import { error } from "console";

interface UserInitialStateI {
    isAuth: boolean
    user: userI
    isLoading: boolean
    error: string | null
}

const BASE_URL: string = 'https://api.escuelajs.co/api/v1/users/'
const LOGIN_BASE_URL:string = 'https://api.escuelajs.co/api/v1/auth/login'
const TOKEN_BASE_URL:string = 'https://api.escuelajs.co/api/v1/auth/profile'

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

export const logInUser = createAsyncThunk<userI, formLogInI, {rejectValue: string}>('user/logInUser', async (user, {rejectWithValue}) => {
    try{
        const res = await axios.post(LOGIN_BASE_URL, user)
        const token = res.data.access_token
        if(!token)
            throw new Error('error has accured')
        const res_2 = await axios.get(TOKEN_BASE_URL, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const data = res_2.data as userI
        if(!data)
            throw new Error('error has accured')

        return data   
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'Error has accured'
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
            state.isAuth = false
        })
        .addCase(logInUser.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.user = action.payload
            state.isAuth = true
        })
        .addCase(logInUser.pending, (state, acion) => {
            state.isLoading = true
            state.error = null
            state.isAuth = false
        })
    }

})


export default userSlice.reducer
