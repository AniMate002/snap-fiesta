import {Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure, Text} from '@chakra-ui/react'
import { useAppSelector } from '../Redux/hooks'

interface LoadingModalWindowProps {
    isLoading: boolean
}

const LoadingModalWindow:React.FC<LoadingModalWindowProps> = ({isLoading}) => {
    // const { isLoading } = useAppSelector(state => state.user)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <Modal isOpen={isLoading} onClose={onClose} closeOnOverlayClick={false} isCentered>
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