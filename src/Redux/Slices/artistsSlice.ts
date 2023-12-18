import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { artistI, userI } from "../types"
import { client } from "./imageSlice"
import { Photo, Photos } from "pexels"

const BASIC_ARTISTS_URL:string = 'https://api.slingacademy.com/v1/sample-data/users'

interface ArtistsInitialStateI {
    artists: Array<artistI>
    isLoading: boolean
    error: string | null
}

const initialState:ArtistsInitialStateI = {
    artists: [],
    isLoading: false,
    error: null
}

export const fetchArtists = createAsyncThunk<artistI[], number, {rejectValue: string, state: {artists: ArtistsInitialStateI}}>('artists/fetchArtists', async (offset, {rejectWithValue, getState}) => {
    try{
        const res = await axios.get(BASIC_ARTISTS_URL + `?offset=${(offset-1)*10}&limit=10`)
        const data = res.data
        if(!data)
            throw new Error('error has accured')
        console.log(data)
        return data.users as artistI[]
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'Arror has accured'
        return rejectWithValue(errorMessage)
    }
})

export const searchArtists = createAsyncThunk<artistI[], {searchQuery:string | undefined, page:number}, {rejectValue: string}>('artists/searchArtists',async ({searchQuery, page}, {rejectWithValue}) => {
    try{
        const res = await axios.get(BASIC_ARTISTS_URL + `?search=${searchQuery}&limit=100`)
        const data = res.data
        if(!data)
            throw new Error('error has accured')
        console.log(data)
        return data.users as artistI[]
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'Arror has accured'
        return rejectWithValue(errorMessage)
    }
})

const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchArtists.fulfilled, (state, action) => {
            state.artists = action.payload;
            state.isLoading = false
            state.error = null
        })
        .addCase(fetchArtists.pending, (state) => {
            state.isLoading = true;
            state.error = null
        })
        .addCase(searchArtists.fulfilled, (state, action) => {
            state.artists = action.payload
            state.isLoading = false
            state.error = null
        })
        .addCase(searchArtists.pending, (state) => {
            state.isLoading = true;
            state.error = null
        })
    }
})

export default artistsSlice.reducer