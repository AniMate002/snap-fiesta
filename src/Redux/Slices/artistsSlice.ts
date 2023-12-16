import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { artistI, userI } from "../types"

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
    }
})

export default artistsSlice.reducer