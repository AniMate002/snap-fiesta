import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {createClient} from 'pexels'
import { Image } from '../types'
import {Photos, Photo} from 'pexels/dist/types'

const KEY:string = 'bsRsiBMCCMWqV1vwrqCUTkXwfkz8e8DKwt4xqXa2Lthfsr3DQ8xh4NMF'
const client = createClient(KEY)
const query:string = 'Nature'

type ImagesState = {
    images: Photo[]
    error: string | null
    isLoading: boolean
}

const initialState: ImagesState = {
    images: [],
    error: null,
    isLoading: false
}

export const fetchImages = createAsyncThunk<Photo[], void, {rejectValue: string}>('images/fetchImages', async (_, {rejectWithValue}) => {
    try{
        const res = await client.photos.curated({per_page: 10}) as Photos
        const data = res.photos
        if(!data)
            throw new Error('error has accured')
        return data
    }catch(e){
        if(e instanceof Error)
            return rejectWithValue(e.message)
        else
            return rejectWithValue('Error has accured')
    }
})


const photoSlice = createSlice({
    name: 'images',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.
        addCase(fetchImages.fulfilled, (state, action) => {
            console.log(action.payload)
            state.images = action.payload
            state.isLoading = false
            state.error = null
        })
        .addCase(fetchImages.pending, (state, action) => {
            state.error = null
            state.isLoading = true
        })
    }
})

export default photoSlice.reducer