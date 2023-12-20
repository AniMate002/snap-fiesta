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
    const { images, isLoading, error } = useAppSelector(state => state.images)
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
    if(error || (renderedImages.length === 0 && isLoading === false)){
        return <Box w={'75%'} display={'flex'} flexDir={'column'} gap={5} border={'2px solid #edf2f7'} height={'fit-content'} width={'fit-content'} mt={20} mx={'auto'} bg={'red.50'} py={3} px={5} rounded={'xl'}>
                    <Heading as={'h2'} color={'red.400'} textAlign={'center'} >Images were not found <i className="fa-regular fa-face-frown fa-bounce"></i></Heading>
                </Box>
    }
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