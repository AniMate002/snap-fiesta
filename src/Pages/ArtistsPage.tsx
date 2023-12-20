import { Box, Button, Collapse, Container, Flex, Spinner, Text, VStack, useDisclosure } from "@chakra-ui/react";
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
    const { artists, isLoading, error } = useAppSelector(state => state.artists)
    const [form, setForm] = useState<ArtistsFormStateI>({})
    const [search, setSearch] = useSearchParams()
    const { isOpen, onToggle} = useDisclosure()

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
            <Flex justifyContent={'space-between'} flexDir={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
                <ArtistsList isLoading={isLoading} artists={artists} error={error}/>
                <ArtistSearchForm form={form} setForm={setForm} display={['none', 'none', 'none', 'initial']}/>
                <Box display={['initial', 'initial', 'initial', 'none']} w={'100%'} mb={5}>
                    <Button fontSize={'sm'} w={'100%'} onClick={onToggle} bg={'red.400'} color={'white'} rightIcon={<Text fontSize={'12px'} className="fa-solid fa-arrow-down"></Text>}>Filter</Button>
                    <Collapse in={isOpen}>
                        <ArtistSearchForm form={form} setForm={setForm} display={['initial', 'initial', 'initial', 'none']}/>
                    </Collapse>
                </Box>
            </Flex>
            {/* <ArtistsPagination page={parseInt(search.get('page') || '0')}/> */}
        </Container>
    );
}
 
export default ArtistsPage;