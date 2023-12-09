import { Container, Box, SimpleGrid, Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Inspiration/Banner";
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { chooseWOTD, fetchPhotoOfTheDay, resetImages, searchImages } from "../Redux/Slices/imageSlice";
import ImageCard from "../Components/HomePageComponents/ListOfAllImages/ImageCard";
import Pagination from "../Components/HomePageComponents/Pagination";

const InspirationPage:React.FC = () => {
    const dispatch = useAppDispatch()
    const { wordOfTheDay } = useAppSelector(state => state.images.inspiration)
    const { images, isLoading } = useAppSelector(state => state.images)
    useEffect(() => {
        dispatch(chooseWOTD())
        dispatch(resetImages())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchPhotoOfTheDay()).then(() => dispatch(searchImages({page: 1, query: wordOfTheDay})))
    }, [wordOfTheDay, dispatch])
    const renderedImages = images.map(image => {
        return <ImageCard key={image.id} {...image}/>
    })
    return(
        <Container maxW={'1500px'}>
            <Banner />
            <SimpleGrid mb={10} columns={[1,2,3,4]} gap={10}>
                {renderedImages}
            </SimpleGrid>
            {isLoading ? <Spinner display={'block'} mx={'auto'} mb={20} color={'red.400'} size={'xl'} thickness={'5px'}/> : ''}
            <Pagination WOTD={wordOfTheDay}/>
        </Container>
    )
}

export default InspirationPage