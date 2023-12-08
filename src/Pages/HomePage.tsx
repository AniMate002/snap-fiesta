import React, { useEffect } from "react";
import ListOfImages from "../Components/HomePageComponents/ListOfAllImages/ListOfImages";
import {Container} from '@chakra-ui/react'
import Pagination from "../Components/HomePageComponents/Pagination";
import Navigation from "../Components/HomePageComponents/FilterNavigation/Navigation";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../Redux/hooks";
import { fetchImages, resetImages, searchImages } from "../Redux/Slices/imageSlice";

const HomePage: React.FC = () => {
    const [search, setSearch] = useSearchParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(resetImages())
        if(search.get('type'))
            dispatch(searchImages({query: search.get('type') || '', page:1}))
        else if(search.get('color'))
            dispatch(searchImages({query: search.get('color') || '', page:1}))
        else if(search.get('search'))
            dispatch(searchImages({query: search.get('search') || '', page:1}))
        else
            dispatch(fetchImages(1))
    }, [dispatch, search])

    return(
        <Container maxW={'1500px'}>
            <Navigation />
            {/* <ListOfImages />
            <Pagination /> */}
        </Container>
    )
}


export default HomePage