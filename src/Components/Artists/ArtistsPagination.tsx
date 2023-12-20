import { Button, Flex, Text } from "@chakra-ui/react";
import { useAppDispatch } from "../../Redux/hooks";
import { fetchArtists } from "../../Redux/Slices/artistsSlice";
import { ReactNode, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArtistsPaginationButton from "./ArtistsPaginationButton";

interface ArtistsPaginationI {
    page: number
}

const ArtistsPagination:React.FC<ArtistsPaginationI> = ({page}) => {
    const [renderedButtons, setRenderedButtons] = useState<ReactNode[]>([])
    const [search, setSearch] = useSearchParams()
    const dispatch = useAppDispatch()

    const LoadMoreArtistsHandler = (pageToChange:number):void => {
        setSearch({page: pageToChange.toString()})
    }
    useEffect(() => {
        setRenderedButtons([])
        if(page === 1){
            for(let i = 1; i <= 5; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
        }else if(page === 2){
            for(let i = page - 1; i < page; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
            for(let i = page; i < page + 4; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
        }else if(page === 9){
            for(let i = page - 3; i < page; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
            for(let i = page; i < page + 2; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
        }else if(page === 10){
            for(let i = page - 4; i < page; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
            for(let i = page; i < page + 1; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
        }else{
            for(let i = page - 2; i < page + 3; i++){
                const newBtn = <ArtistsPaginationButton i={i} LoadMoreArtistsHandler={LoadMoreArtistsHandler}/>
                setRenderedButtons(prev => [...prev, newBtn])
            }
        }
    }, [page])

    return (  
        <Flex mt={10} py={2} w={'fit-content'} alignItems={'center'} justifyContent={'center'} mx={'auto'} gap={2}>
            <Button isDisabled={page === 1} size={['sm', 'md']} mr={[1,3,4]} rounded={'full'} _hover={{bgColor:'red.400', color:'white'}} transition={'all 0.2s ease'} onClick={() => LoadMoreArtistsHandler(page-1)} bgColor={''} color={'red.400'}>
                <i className="fa-solid fa-chevron-left"></i>
            </Button>
            {renderedButtons}
            <Button isDisabled={page === 10} size={['sm', 'md']} ml={[1,3,4]} rounded={'full'} _hover={{bgColor:'red.400', color:'white'}} transition={'all 0.2s ease'} onClick={() => LoadMoreArtistsHandler(page+1)} bgColor={''} color={'red.400'}>
                <i className="fa-solid fa-chevron-right"></i>
            </Button>
        </Flex>
    );
}
 
export default ArtistsPagination;