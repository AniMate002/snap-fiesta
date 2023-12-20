import {Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure, Text, Box, Heading, Button, ModalCloseButton, Wrap, Toast, useToast} from '@chakra-ui/react'
import { useAppSelector } from '../Redux/hooks'

interface LoadingModalWindowProps {
    isLoading: boolean
    error: string | null
}

const LoadingModalWindow:React.FC<LoadingModalWindowProps> = ({isLoading, error}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    if(error !== null){
        toast({
            status:'error',
            title: 'Error has occured',
            isClosable: true,
            description: error
        })
    }
    return(
        <Modal isOpen={isLoading} onClose={onClose} closeOnOverlayClick={error? true : false} isCentered>
            <ModalOverlay />
            <ModalContent w={'fit-content'} p={10}>
                <ModalBody> 
                    <Text color={'grey'} fontSize={'6xl'} as={'i'} className="fa-solid fa-spinner fa-spin"></Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default LoadingModalWindow