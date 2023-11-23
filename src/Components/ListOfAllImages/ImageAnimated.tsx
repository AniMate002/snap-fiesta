import { motion, useAnimate } from 'framer-motion'
import {useState} from 'react'
import { Box, Image, useStatStyles, Modal , ModalOverlay, ModalContent, ModalBody, ModalFooter, useDisclosure, Button, Flex, Heading, Text} from '@chakra-ui/react'
import {DownloadIcon, CloseIcon} from '@chakra-ui/icons'

interface ImageAnimatedProps {
    avg_color: string | null
    src: {
        large2x: string
    }
    alt: string | null
    photographer: string
}


const ImageAnimated: React.FC<ImageAnimatedProps> = ({avg_color, src, alt, photographer}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [visibleOverLay, setVisibleOverLay ] = useState(false)
    const [scope, animate] = useAnimate()
    const openImage = ():void => {
        onOpen();
        setVisibleOverLay(true)
        animate(scope.current, {'scale': '1.5', 'opacity': '0'})
    }
    const closeImage = ():void => {
        onClose();
        animate(scope.current, {'scale':'1.0', 'opacity': 1})
    }
    return(
        <Box 
                whileHover={{transform: 'translate(10px, -10px)', shadow: `-20px 20px 10px ${avg_color}`}}
                ref={scope}
                onClick={openImage}
                as={motion.div} 
                rounded={'lg'} 
                overflow={'hidden'} 
                mb={'10px'} 
                shadow={`0px 0px ${avg_color}`} 
                _hover={{'shadow': `-20px 20px 10px ${avg_color}`}} 
                transition={'0.2s'}
                >
                <Image 
                    as={motion.img}
                    m={'0 auto'}
                    height={'600px'}
                    w={'500px'}
                    objectFit='cover'
                    src={src.large2x}
                    alt={alt || `Photo made by: ${photographer}`} />
                {/* <Box w={'100vw'} h={'100vh'} backgroundColor={'black'} position={'sti'} zIndex={99} hidden={!visibleOverLay}/> */}
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
            </Box>
    )
}

export default ImageAnimated