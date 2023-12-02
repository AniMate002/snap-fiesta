import { Button } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import { fetchImages, searchImages } from "../../Redux/Slices/imageSlice"
import { useSearchParams } from "react-router-dom"


const Pagination:React.FC = () => {
    const { images } = useAppSelector(state => state.images)
    const [search, setSearch] = useSearchParams()
    const dispatch = useAppDispatch()
    const loadImagesClick = ():void => {
        const queryType:string|null = search.get('type')
        const queryColor:string|null = search.get('color')
        const querySearch:string|null = search.get('search')
        if(queryType)
            dispatch(searchImages({query: queryType, page: Math.floor(images.length / 24) + 1}))
        else if(queryColor)
            dispatch(searchImages({query: queryColor, page: Math.floor(images.length / 24) + 1}))
        else if(querySearch)
            dispatch(searchImages({query: querySearch, page: Math.floor(images.length / 24) + 1}))
        else
            dispatch(fetchImages(Math.floor(images.length / 24) + 1))
    }
    return(
        <Button onClick={loadImagesClick} display={'block'} mx={'auto'} mt={10} mb={20} rounded={'xl'} bg={'red.400'} color={'white'}>
            Load more images
        </Button>
    )
}

export default Pagination