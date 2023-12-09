import { SimpleGrid, Box, Heading, Text, Spinner } from '@chakra-ui/react'
import { useAppSelector } from '../../../Redux/hooks'
import ImageCard from './ImageCard'

const ListOfImages: React.FC = () => {
    const { images, error, isLoading } = useAppSelector(state => state.images)
    const renderedImages = images.map(image => {
        return <ImageCard key={image.id} {...image}/>
    })
    return(
        <>
            <SimpleGrid columns={[1, 2, 3, 4]} w={'100%'} gap={10}>
                {/* {isLoading ? <Heading>Loading...</Heading> : renderedImages} */}
                {renderedImages}
            </SimpleGrid>
            {isLoading ? <Spinner display={'block'} mx={'auto'} my={20} color={'red.400'} size={'xl'} thickness={'5px'}/> : ''}
        </>
    )
}

export default ListOfImages