import { Box, Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchArtists } from "../Redux/Slices/artistsSlice";
import ArtistCard from "../Components/Artists/ArtistCard";
import { useSearchParams } from "react-router-dom";



const ArtistsPage:React.FC = () => {
    const dispatch = useAppDispatch()
    const { artists, isLoading } = useAppSelector(state => state.artists)
    const [search, setSearch] = useSearchParams()

    useEffect(() => {
        const currPage:number = parseInt(search.get('page') || '0')
        if(isNaN(currPage) || typeof currPage !== 'number' || currPage <= 0){
            setSearch({page: '1'})
        }
    }, [])

    useEffect(() => {
        const currPage:number = parseInt(search.get('page') || '0')
        dispatch(fetchArtists(currPage))
    }, [dispatch, search.get('page')])

    const renderedArtists = artists.map((artist) => {
        return <ArtistCard key={artist.id} {...artist}/>
    })

    return (  
        <Container my={20} maxW={'1200px'}>
            <Flex justifyContent={'space-between'} gap={10}>
                <Box w={'75%'} display={'flex'} flexDir={'column'} gap={5}>
                    {isLoading ? <Spinner display={'block'} mx={'auto'} mb={20} color={'red.400'} size={'xl'} thickness={'5px'}/> : renderedArtists}
                </Box>
                <Box>
                    filter
                </Box>
            </Flex>
        </Container>
    );
}
 
export default ArtistsPage;