import { Container, Box } from "@chakra-ui/react";
import React from "react";
import Banner from "../Components/Inspiration/Banner";
import { useEffect } from 'react'
import { useAppDispatch } from "../Redux/hooks";
import { chooseWOTD, fetchPhotoOfTheDay } from "../Redux/Slices/imageSlice";

const InspirationPage:React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchPhotoOfTheDay())
            .then(() => dispatch(chooseWOTD()))
    }, [dispatch])
    return(
        <Container maxW={'1500px'}>
            <Banner />
        </Container>
    )
}

export default InspirationPage