import { Button } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

interface ArtistsPaginationButtonI {
    LoadMoreArtistsHandler: (page:number) => void
    i: number
}

const ArtistsPaginationButton:React.FC<ArtistsPaginationButtonI> = ({LoadMoreArtistsHandler, i}) => {
    const [search, setSearch] = useSearchParams()
    console.log(search.get('page'))
    return (  
        <Button rounded={'full'} _hover={{bgColor:'red.400', color:'white'}} boxShadow={parseInt(search.get('page') || '0') === i ? '3px 3px #f56a6b' : ''} transition={'all 0.2s ease'} onClick={() => LoadMoreArtistsHandler(i)} bgColor={'#edeef0'} color={'red.400'}>{i}</Button>
    );
}
 
export default ArtistsPaginationButton;