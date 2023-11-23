import { SimpleGrid, Box, Heading } from '@chakra-ui/react'
import { useAppSelector } from '../../Redux/hooks'
import ImageCard from './ImageCard'

const ListOfImages: React.FC = () => {
    const { images, error, isLoading } = useAppSelector(state => state.images)
    const renderedImages = images.map(image => {
        return <ImageCard key={image.id} {...image}/>
    })
    return(
        <>
            <SimpleGrid columns={4} spacing={5}>
                {isLoading ? <Heading>Loading...</Heading> : renderedImages}
            </SimpleGrid>
        </>
    )
}

export default ListOfImages