import { Modal, ModalBody, ModalOverlay, Box, Flex, Heading, Text, Image, ModalContent, ModalFooter, Button} from '@chakra-ui/react'
import { DownloadIcon, CloseIcon} from '@chakra-ui/icons'
import { ImageAnimatedProps } from './ImageAnimated'
import { motion } from "framer-motion"

interface ImageModalProps extends ImageAnimatedProps{
    openImage: () => void
    closeImage: () => void
    isOpen: boolean
}

const ImageModal:React.FC<ImageModalProps> = ({closeImage, avg_color, photographer, src, alt, isOpen, hashTags}) => {
    const renderedHashTags = hashTags.map(hashTag => {
        return <Text fontStyle={'italic'}>#{hashTag}</Text>
    })
    return(
        <Modal onClose={closeImage} size={'xl'} isOpen={isOpen}>
                    <ModalOverlay/>
                    <ModalContent shadow={`-20px 20px 20px ${avg_color}`}  display={'flex'} alignItems={'center'} bgGradient='linear(to-br, white, #E2E8F0)'>
                        <ModalBody pt={8}>
                            <Image 
                            rounded={'xl'}
                            as={motion.img}
                            m={'0 auto'}
                            height={'600px'}
                            w={'500px'}
                            objectFit='cover'
                            src={src.large2x}
                            alt={alt || `Photo made by: ${photographer}`} />
                            <Flex mt={4} alignItems={'end'}>
                                <Heading color={avg_color || '#ff436cff'}>{photographer}</Heading>
                                <Box ml={'auto'}>
                                    <Text fontSize={'1rem'}  color={'#85888c'}><Text color={'#85888c'} mr={2} fontSize={'0.7rem'} className="fa-solid fa-heart"></Text>{(Math.random()).toFixed(2)}k</Text>
                                    <Text fontSize={'1rem'}  color={'#85888c'}><Text color={'#85888c'} mr={2} fontSize={'0.7rem'} className="fa-solid fa-eye"></Text>{(Math.random()).toFixed(2)}k</Text>
                                </Box>
                            </Flex>
                            <Box display={'flex'} gap={1} alignItems={'center'} mb={4}>
                                {renderedHashTags}
                            </Box>
                            <Box mt={2} display={'flex'} alignItems={'center'} gap={2}>
                                <Button bgColor={avg_color || "#ff436cff"} color={'white'} variant={'solid'}><Text mr={2} className="fa-regular fa-heart"></Text>Like</Button>
                                <Button leftIcon={<DownloadIcon />} color={avg_color || '#ff436cff'} border={`2px solid ${avg_color}`} variant={'outline'}>Download</Button>
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