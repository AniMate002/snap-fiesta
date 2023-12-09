import { motion, useAnimate } from 'framer-motion'
import {useState} from 'react'
import { Box, Image, useStatStyles, Modal , ModalOverlay, ModalContent, ModalBody, ModalFooter, useDisclosure, Button, Flex, Heading, Text} from '@chakra-ui/react'
import {DownloadIcon, CloseIcon} from '@chakra-ui/icons'
import ImageModal from './ImageModal'

export interface ImageAnimatedProps {
    avg_color: string | null
    src: {
        large2x: string
        original: string
        landscape: string
    }
    alt: string | null
    photographer: string
    hashTags: Array<String>
    id: number
}


const ImageAnimated: React.FC<ImageAnimatedProps> = ({avg_color, src, alt, photographer, hashTags, id}) => {
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
                    height={['300px', '600px']}
                    w={'500px'}
                    objectFit='cover'
                    src={src.large2x}
                    alt={alt || `Photo made by: ${photographer}`} />
                <ImageModal id={id} hashTags={hashTags} openImage={openImage} closeImage={closeImage} alt={alt} photographer={photographer} avg_color={avg_color} src={src} isOpen={isOpen}/>
            </Box>
    )
}

export default ImageAnimated