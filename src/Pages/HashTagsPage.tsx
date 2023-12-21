import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchImages, fetchImagesForHashTagsCards, resetImages, searchImages } from "../Redux/Slices/imageSlice";
import HashTagsSwiper from "../Components/HashTags/HashTagsSwiper";
import HashTagsImagesList from "../Components/HashTags/HashTagsImagesList";
import { useSearchParams } from "react-router-dom";


const HashTagsPage:React.FC = () => {
    const dispatch = useAppDispatch()
    const { error, isLoading, hashTags: {cardsImages}, images } = useAppSelector(state => state.images)
    const [search, setSearch] = useSearchParams()
    useEffect(() => {
        dispatch(fetchImagesForHashTagsCards())
        if(!search.get('tag')){
            dispatch(resetImages())
            dispatch(fetchImages(1))
        }
    }, [])
    useEffect(() => {
        dispatch(resetImages())
        if(!search.get('tag')){
            dispatch(fetchImages(1))
        }
        dispatch(searchImages({query: search.get('tag') || ""}))
    }, [dispatch, search])
    return (  
        <Container maxW={'1500px'}>
            <HashTagsSwiper cardsImages={cardsImages}/>
            <HashTagsImagesList images={images} isLoading={isLoading} error={error}/>
        </Container>
    );
}
 
export default HashTagsPage;