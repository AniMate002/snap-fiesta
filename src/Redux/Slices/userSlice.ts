import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import { chooseRandomHashtags, formLogInI, userI } from "../types";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { addAbortSignal } from "stream";
import { error } from "console";
import { client } from "./imageSlice";
import { Photos } from "pexels";
import { isUndefined } from "util";

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


export const generateMyWorks = createAsyncThunk('user/generateMyWorks',async (_, {rejectWithValue}) => {
    try{
        const res = await client.photos.curated({per_page:10, page:5}) as Photos
        const data = res.photos
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
    reducers: {
        signOut: (state) => {
            state.user = {}
            state.isAuth = false
            state.error = null
            state.isLoading = false
        },
        addToLiked: (state, action) => {
            if(state.user.liked === undefined)
                state.user.liked = [action.payload]
            else{
                const found = state.user.liked.find(item => item.id === action.payload.id)
                if(found)
                    state.user.liked = state.user.liked.filter(item => item.id !== action.payload.id)
                else
                    state.user.liked.push(action.payload)
            }

        }
    },
    extraReducers: builder => {
        builder
        .addCase(createUser.fulfilled, (state, action) => {
            state.isAuth = true
            state.user = action.payload
            state.error = null
            state.isLoading = true
        })
        .addCase(createUser.pending, (state) => {
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
        .addCase(logInUser.pending, (state) => {
            state.isLoading = true
            state.error = null
            state.isAuth = false
        })
        .addCase(generateMyWorks.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = null
            const taggedImages = action.payload.map(item => {
                const hashTagsToAdd = chooseRandomHashtags();
                return {
                    ...item,
                    hashTags: hashTagsToAdd,
                }
            })
            state.user.myWorks = taggedImages
        })
        .addCase(generateMyWorks.pending, (state) => {
            state.isLoading = true
            state.error = null
        })

    }

})


export default userSlice.reducer
export const { signOut, addToLiked } = userSlice.actions
