import { SimpleGrid, Box, Heading, Text, Spinner } from '@chakra-ui/react'
import { useAppSelector } from '../../../Redux/hooks'
import ImageCard from './ImageCard'

const ListOfImages: React.FC = () => {
    const { images, error, isLoading } = useAppSelector(state => state.images)
    const renderedImages = images.map(image => {
        return <ImageCard key={image.id} {...image}/>
    })
    if(error){
        return <Box w={'75%'} display={'flex'} flexDir={'column'} gap={5} border={'2px solid #edf2f7'} height={'fit-content'} width={'fit-content'} mt={20} mx={'auto'} bg={'red.50'} py={3} px={5} rounded={'xl'}>
                    <Heading as={'h2'} color={'red.400'} textAlign={'center'} >Error!!! <i className="fa-regular fa-face-frown fa-bounce"></i></Heading>
                    <Heading as={'h5'} color={'red.400'} textAlign={'center'} >{error}</Heading>
                </Box>
    }
    if(renderedImages.length === 0 && isLoading === false){
        return <Box w={'75%'} display={'flex'} flexDir={'column'} gap={5} border={'2px solid #edf2f7'} height={'fit-content'} width={'fit-content'} mt={20} mx={'auto'} bg={'red.50'} py={3} px={5} rounded={'xl'}>
                    <Heading as={'h2'} color={'red.400'} textAlign={'center'} >Images were not found <i className="fa-regular fa-face-frown fa-bounce"></i></Heading>
                </Box>
    }
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