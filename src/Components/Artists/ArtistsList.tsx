import { Box, Container, Flex, Heading, Spinner, VStack } from "@chakra-ui/react";
import { artistI } from "../../Redux/types";
import ArtistCard from "./ArtistCard";

interface ArtistsListI {
    artists: artistI[]
    isLoading: boolean
    error: string | null
}

const ArtistsList:React.FC<ArtistsListI> = ({artists, isLoading, error}) => {
    const renderedArtists = artists.map((artist) => {
        return <ArtistCard key={artist.id} {...artist}/>
    })

    if(error){
        return  <Box w={'75%'} display={'flex'} flexDir={'column'} gap={5} border={'2px solid #edf2f7'} height={'fit-content'} width={'fit-content'} mt={20} mx={'auto'} bg={'red.50'} py={3} px={5} rounded={'xl'}>
                    <Heading as={'h2'} color={'red.400'} textAlign={'center'} >Error!!! <i className="fa-regular fa-face-frown fa-bounce"></i></Heading>
                    <Heading as={'h5'} color={'red.400'} textAlign={'center'} >{error}</Heading>
                </Box>
    }

    if(artists.length === 0 && isLoading === false) {
        return <Box w={'75%'} display={'flex'} flexDir={'column'} gap={5} border={'2px solid #edf2f7'} height={'fit-content'} width={'fit-content'} mt={20} mx={'auto'} bg={'red.50'} py={3} px={5} rounded={'xl'}>
                    <Heading as={'h2'} color={'red.400'} textAlign={'center'} >No artists were found <i className="fa-regular fa-face-frown fa-bounce"></i></Heading>
                </Box>
    }
    
    return (  
        <Box w={['100%','100%', '100%', '75%']} display={'flex'} flexDir={'column'} gap={5}>
            {isLoading ? <Spinner display={'block'} mx={'auto'} mb={20} color={'red.400'} size={'xl'} thickness={'5px'}/> : renderedArtists}
        </Box>
    );
}
 
export default ArtistsList;