import { Modal, ModalBody, ModalOverlay, Box, Flex, Heading, Text, Image, ModalContent, ModalFooter, Button} from '@chakra-ui/react'
import { DownloadIcon, CloseIcon} from '@chakra-ui/icons'
import { ImageAnimatedProps } from './ImageAnimated'
import { motion } from "framer-motion"
import { url } from 'inspector'
import { useAppDispatch, useAppSelector } from '../../../Redux/hooks'
import { addToLiked } from '../../../Redux/Slices/userSlice'
import { useNavigate } from 'react-router-dom'

interface ImageModalProps extends ImageAnimatedProps{
    openImage: () => void
    closeImage: () => void
    isOpen: boolean
}

const ImageModal:React.FC<ImageModalProps> = ({closeImage, avg_color, photographer, src, alt, isOpen, hashTags, id}) => {
    const dispatch = useAppDispatch()
    const { isAuth, user } = useAppSelector(state => state.user)
    const navigate = useNavigate()
    const renderedHashTags = hashTags.map(hashTag => {
        return <Text key={id} fontStyle={'italic'}>#{hashTag}</Text>
    })
    const downloadHandler = (): void => {
        const aTag = document.createElement('a');
        aTag.href = src.original;
        
        // Extract the filename from the URL
        // const fileName = src.large2x.split('/').pop() || 'downloaded-image';
        
        aTag.setAttribute('download', src.original);
        aTag.setAttribute('target', '_blank'); // Set target attribute to "_blank"
        
        // Append the anchor tag to the body
        document.body.appendChild(aTag);
        
        // Trigger a click on the anchor tag
        aTag.click();
        aTag.remove()
        // Remove the anchor tag from the body
        // document.body.removeChild(aTag);
    };
    const likeHandler = ():void => {
        if(isAuth)
            dispatch(addToLiked({avg_color, photographer, src, alt, hashTags, id}))
        else
            navigate('/auth?var=logIn')
    }
    const checkIfLiked = ():boolean => {
        const found = user.liked?.find(item => item.id === id)
        return found ? true : false
    }
    return(
        <Modal onClose={closeImage} size={'xl'} isOpen={isOpen} isCentered>
                    <ModalOverlay/>
                    <ModalContent shadow={`-20px 20px 20px ${avg_color}`}  display={'flex'} alignItems={'center'} bgGradient='linear(to-br, white, #E2E8F0)'>
                        <ModalBody pt={8}>
                            <Image 
                            rounded={'xl'}
                            as={motion.img}
                            m={'0 auto'}
                            height={['350px', '600px']}
                            w={['300px', '500px']}
                            objectFit='cover'
                            src={src.large2x}
                            alt={alt || `Photo made by: ${photographer}`} />
                            <Flex mt={[2, 4]} alignItems={['end', 'end']} flexDir={['row', 'row']} justifyContent={'space-between'} flexWrap={'wrap'}>
                                <Heading fontSize={['2xl', '4xl']} color={avg_color || '#ff436cff'}>{photographer}</Heading>
                                <Box display={'flex'} alignItems={'center'} gap={4}>
                                    <Text fontSize={['sm', '1rem']}  color={'#85888c'}><Text color={'#85888c'} mr={2} fontSize={'0.7rem'} className="fa-solid fa-heart"></Text>{(Math.random()).toFixed(2)}k</Text>
                                    <Text fontSize={'1rem'}  color={'#85888c'}><Text color={'#85888c'} mr={2} fontSize={'0.7rem'} className="fa-solid fa-eye"></Text>{(Math.random()).toFixed(2)}k</Text>
                                </Box>
                            </Flex>
                            <Box display={'flex'} flexWrap={'wrap'} gap={1} alignItems={'center'} mb={4}>
                                {renderedHashTags}
                            </Box>
                            <Box mt={2} display={'flex'} alignItems={'center'} gap={2}>
                                <Button onClick={likeHandler} fontSize={['sm', 'lg']} bgColor={avg_color || "#ff436cff"} color={'white'} variant={'solid'}><Text mr={2} className={`${checkIfLiked() ? 'fa-solid' : 'fa-regular'} fa-heart`}></Text>Like</Button>
                                <Button fontSize={['sm', 'lg']} onClick={downloadHandler} leftIcon={<DownloadIcon />} color={avg_color || '#ff436cff'} border={`2px solid ${avg_color}`} variant={'outline'}>Download</Button>
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            <Button rounded={'full'} bg={'red.300'} color={'white'} onClick={closeImage}><CloseIcon /></Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
    )
}

export default ImageModal