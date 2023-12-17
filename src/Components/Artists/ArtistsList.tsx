import { Box, Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import { artistI } from "../../Redux/types";
import ArtistCard from "./ArtistCard";

interface ArtistsListI {
    artists: artistI[]
    isLoading: boolean
}

const ArtistsList:React.FC<ArtistsListI> = ({artists, isLoading}) => {
    const renderedArtists = artists.map((artist) => {
        return <ArtistCard key={artist.id} {...artist}/>
    })
    
    return (  
        <Box w={'75%'} display={'flex'} flexDir={'column'} gap={5}>
            {isLoading ? <Spinner display={'block'} mx={'auto'} mb={20} color={'red.400'} size={'xl'} thickness={'5px'}/> : renderedArtists}
        </Box>
    );
}
 
export default ArtistsList;