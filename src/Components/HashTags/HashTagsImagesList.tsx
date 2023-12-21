import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Photo } from "pexels";
import ImageCard from "../HomePageComponents/ListOfAllImages/ImageCard";
import { PhotoWithHashTags } from "../../Redux/Slices/imageSlice";



interface HashTagsImagesListI {
    images: PhotoWithHashTags[]
    error: string | null
    isLoading: boolean
}

const HashTagsImagesList:React.FC<HashTagsImagesListI> = ({images, error, isLoading}) => {
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
 
export default HashTagsImagesList;