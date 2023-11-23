import React from "react";
import ListOfImages from "../Components/ListOfAllImages/ListOfImages";
import {Container} from '@chakra-ui/react'

const HomePage: React.FC = () => {
    return(
        <Container maxW={'1500px'}>
            <ListOfImages />
        </Container>
    )
}


export default HomePage