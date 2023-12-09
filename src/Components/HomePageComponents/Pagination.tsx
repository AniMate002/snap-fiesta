import { Button } from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks"
import { fetchImages, searchImages } from "../../Redux/Slices/imageSlice"
import { useSearchParams } from "react-router-dom"

interface paginationI {
    WOTD?: string
}

const Pagination:React.FC<paginationI> = ({WOTD}) => {
    const { images } = useAppSelector(state => state.images)
    const [search, setSearch] = useSearchParams()
    const dispatch = useAppDispatch()
    const loadImagesClick = ():void => {
        const queryType:string|null = search.get('type')
        const queryColor:string|null = search.get('color')
        const querySearch:string|null = search.get('search')
        if(queryType)
            dispatch(searchImages({query: queryType}))
        else if(queryColor)
            dispatch(searchImages({query: queryColor}))
        else if(querySearch)
            dispatch(searchImages({query: querySearch}))
        else if(WOTD)
            dispatch(searchImages({query: WOTD}))
        else
            dispatch(fetchImages(Math.floor(images.length / 24) + 1))
    }
    return(
        <Button onClick={loadImagesClick} display={'block'} mx={'auto'} mt={10} mb={[10, 20]} rounded={'xl'} bg={'red.400'} color={'white'}>
            Load more images
        </Button>
    )
}

export default Pagination