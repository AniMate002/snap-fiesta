import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from '@reduxjs/toolkit'
import {createClient} from 'pexels'
import { Image, chooseRandomHashtags } from '../types'
import {Photos, Photo} from 'pexels/dist/types'
import { AriaAttributes } from 'react'
import axios from 'axios'

const KEY:string = 'bsRsiBMCCMWqV1vwrqCUTkXwfkz8e8DKwt4xqXa2Lthfsr3DQ8xh4NMF'
export const client = createClient(KEY)
const query:string = 'Nature'

export interface PhotoWithHashTags extends Photo{
    hashTags: Array<string>
}

interface searchImagesI {
    page?: number
    query: string
}

type ImagesState = {
    images: PhotoWithHashTags[]
    filteredImages: PhotoWithHashTags[]
    error: string | null
    isLoading: boolean
    inspiration: {
        wordOfTheDay: string
        imageOfTheDay: string
    }
    hashTags: {
        cardsImages: Photo[]
    }
}

const initialState: ImagesState = {
    images: [],
    filteredImages: [],
    error: null,
    isLoading: false,
    inspiration: {
        wordOfTheDay: '',
        imageOfTheDay: ''
    },
    hashTags: {
        cardsImages: []
    }
}



export const fetchImages = createAsyncThunk<Photo[], number, {rejectValue: string}>('images/fetchImages', async (page, {rejectWithValue}) => {
    try{
        const res = await client.photos.curated({per_page: 24, page: page}) as Photos
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

export const searchImages = createAsyncThunk<Photo[], searchImagesI, {rejectValue: string, state:{images: ImagesState}}>('images/searchImages',async ({query, page}, {rejectWithValue, getState}) => {
    try {
        const res = await client.photos.search({query: query.toLocaleLowerCase(), per_page: 24, page: page || Math.floor(getState().images.images.length / 24) + 1}) as Photos
        const data = res.photos
        if(!data)
            throw new Error('Error')
        return data
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error has accureds'
        return rejectWithValue(errorMessage)
    }
})

export const fetchPhotoOfTheDay = createAsyncThunk<Photo[], void, {rejectValue: string, state:{images:ImagesState}}>('images/fetchPhotoOfTheDay', async (_ ,{rejectWithValue, getState}) => {
    try {
        const res = await client.photos.search({query: getState().images.inspiration.wordOfTheDay.toLocaleLowerCase(), per_page: 1, page:1}) as Photos
        const data = res.photos 
        if(!data)
            throw new Error('error has accured')
        return data
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error has accured!'
        return rejectWithValue(errorMessage) 
    }
})

export const fetchImagesForHashTagsCards = createAsyncThunk<Photo[], void, {rejectValue: string}>('images/fetchImagesForHashTagsCards', async (_, {rejectWithValue}) => {
    try{
        const res = await client.photos.curated({per_page: 30, page: 10}) as Photos
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
        resetImages: (state) => {
            state.images = []
            state.error = null
            state.isLoading = false
        },
        filterImages: (state, action) => {
            // const newFiltered:PhotoWithHashTags[] = state.images.filter(item => item.hashTags.includes(action.payload.hashTags))
            // state.images = newFiltered
        },
        chooseWOTD: (state) => {
            const hashTags = chooseRandomHashtags()
            state.inspiration.wordOfTheDay = hashTags[0]
        }
    },
    extraReducers:(builder) => {
        builder.
        addCase(fetchImages.fulfilled, (state, action) => {
            const taggedImages = action.payload.map(item => {
                const hashTagsToAdd = chooseRandomHashtags();
                return {
                    ...item,
                    hashTags: hashTagsToAdd,
                }
            })
            // state.images = taggedImages;
            state.images = [...state.images, ...taggedImages]
            state.isLoading = false
            state.error = null
            console.log(state.images)
        })
        .addCase(fetchImages.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        .addCase(searchImages.fulfilled, (state, action) => {
            const taggedImages = action.payload.map(item => {
                const hashTagsToAdd = chooseRandomHashtags();
                return {
                    ...item,
                    hashTags: hashTagsToAdd,
                }
            })
            // state.images = taggedImages;
            state.images = [...state.images, ...taggedImages]
            state.isLoading = false
            state.error = null
            console.log(state.images)
        })
        .addCase(searchImages.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        .addCase(fetchPhotoOfTheDay.fulfilled, (state, action) => {
            state.error = null
            state.isLoading = false
            state.inspiration.imageOfTheDay = action.payload[0].src.original
        })
        .addCase(fetchPhotoOfTheDay.pending, (state) => {
            state.error = null
            state.isLoading = true
        })
        .addCase(fetchImagesForHashTagsCards.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.hashTags.cardsImages = action.payload
        })
        .addCase(fetchImagesForHashTagsCards.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        })
    }
})

function isError(action: AnyAction){
    return action.type.endsWith('rejected')
}

export default photoSlice.reducer
export const { resetImages, filterImages, chooseWOTD } = photoSlice.actions