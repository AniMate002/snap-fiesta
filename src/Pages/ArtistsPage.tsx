import { Box, Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchArtists, searchArtists } from "../Redux/Slices/artistsSlice";
import ArtistCard from "../Components/Artists/ArtistCard";
import { parsePath, useSearchParams } from "react-router-dom";
import ArtistsList from "../Components/Artists/ArtistsList";
import ArtistsPagination from "../Components/Artists/ArtistsPagination";
import ArtistSearchForm from "../Components/Artists/ArtistSearchForm";
import { ArtistsFormStateI } from "../Redux/types";



const ArtistsPage:React.FC = () => {
    const dispatch = useAppDispatch()
    const { artists, isLoading } = useAppSelector(state => state.artists)
    const [form, setForm] = useState<ArtistsFormStateI>({})
    const [search, setSearch] = useSearchParams()

    useEffect(() => {
        const currPage:number = parseInt(search.get('page') || '0')
        if(isNaN(currPage) || typeof currPage !== 'number' || currPage <= 0 || currPage > 10){
            setSearch({page: '1'})
        }
    }, [])

    useEffect(() => {
        const currPage:number = parseInt(search.get('page') || '0')
        if(search.get('country') !== null || search.get('keyword') !== null){
            dispatch(searchArtists({searchQuery: search.get('keyword') ? search.get('keyword')?.toString() : search.get('country')?.toString(), page: 1}))
            console.log("fwefefewfew" , search.get('keyword'))
        }
        else
            dispatch(fetchArtists(currPage))
    }, [dispatch, search.get('page'), search.get('keyword'), search.get('country')])

    useEffect(() => {
        console.log(form)
    }, [form])


    return (  
        <Container my={20} maxW={'1200px'}>
            <Flex justifyContent={'space-between'}>
                <ArtistsList isLoading={isLoading} artists={artists}/>
                <ArtistSearchForm form={form} setForm={setForm}/>
            </Flex>
            <ArtistsPagination page={parseInt(search.get('page') || '0')}/>
        </Container>
    );
}
 
export default ArtistsPage;