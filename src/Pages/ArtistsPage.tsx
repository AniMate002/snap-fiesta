import { Box, Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchArtists } from "../Redux/Slices/artistsSlice";
import ArtistCard from "../Components/Artists/ArtistCard";
import { parsePath, useSearchParams } from "react-router-dom";
import ArtistsList from "../Components/Artists/ArtistsList";
import ArtistsPagination from "../Components/Artists/ArtistsPagination";



const ArtistsPage:React.FC = () => {
    const dispatch = useAppDispatch()
    const { artists, isLoading } = useAppSelector(state => state.artists)
    const [search, setSearch] = useSearchParams()

    useEffect(() => {
        const currPage:number = parseInt(search.get('page') || '0')
        if(isNaN(currPage) || typeof currPage !== 'number' || currPage <= 0 || currPage > 10){
            setSearch({page: '1'})
        }
    }, [])

    useEffect(() => {
        const currPage:number = parseInt(search.get('page') || '0')
        dispatch(fetchArtists(currPage))
    }, [dispatch, search.get('page')])



    return (  
        <Container my={20} maxW={'1200px'}>
            <Flex justifyContent={'space-between'} gap={10}>
                <ArtistsList isLoading={isLoading} artists={artists}/>
                <Box>
                    filter
                </Box>
            </Flex>
            <ArtistsPagination page={parseInt(search.get('page') || '0')}/>
        </Container>
    );
}
 
export default ArtistsPage;