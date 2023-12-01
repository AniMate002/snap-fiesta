import { SimpleGrid, Box, Heading, Text } from '@chakra-ui/react'
import { useAppSelector } from '../../../Redux/hooks'
import ImageCard from './ImageCard'

const ListOfImages: React.FC = () => {
    const { images, error, isLoading } = useAppSelector(state => state.images)
    const renderedImages = images.map(image => {
        return <ImageCard key={image.id} {...image}/>
    })
    return(
        <>
            <SimpleGrid columns={4}>
                {/* {isLoading ? <Heading>Loading...</Heading> : renderedImages} */}
                {renderedImages}
            </SimpleGrid>
            {isLoading ? <Text display={'flex'} alignItems={'center'} justifyContent={'center'} mt={10} fontSize={'6xl'} color='grey' className="fa-solid fa-spinner fa-spin"></Text> : ''}
        </>
    )
}

export default ListOfImages