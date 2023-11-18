import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {createClient} from 'pexels'
import { Image } from '../types'
import {Photos, Photo} from 'pexels/dist/types'

const KEY:string = 'bsRsiBMCCMWqV1vwrqCUTkXwfkz8e8DKwt4xqXa2Lthfsr3DQ8xh4NMF'
const client = createClient(KEY)
const query:string = 'Nature'

type ImagesState = {
    images: Image[]
    error: string | null
    isLoading: boolean
}

const initialState: ImagesState = {
    images: [],
    error: null,
    isLoading: false
}

// const photos = await client.photos.curated({ per_page: 10 })
export const fetchImages = createAsyncThunk<Photo[], void, {rejectValue: string}>('images/fetchImages', async (_, {rejectWithValue}) => {
    const res = await client.photos.curated({per_page: 10}) as Photos
    const data = res.photos
    console.log(res.photos)
    return res.photos
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
            // state.images = action.payload?.photos
        })
    }
})

export default photoSlice.reducer