import {Popover, PopoverTrigger, Portal, PopoverContent, VStack, Text, Avatar, Box, Divider} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { userI } from '../../Redux/types'
import { useAppDispatch } from '../../Redux/hooks'
import { signOut } from '../../Redux/Slices/userSlice'

interface UserModalI {
    user: userI
}

const UserModal:React.FC<UserModalI> = ({user}) => {
    const dispatch = useAppDispatch()

    const signOutHandler = ():void => {
        dispatch(signOut())
    }
    return(
        <Popover>
            <PopoverTrigger>
                <Avatar src={user.avatar} size={'md'} name={user.name} rounded={'full'} objectFit={"cover"} />
            </PopoverTrigger>
            {/* <Avatar src={user.avatar} size={'md'} name={user.name} rounded={'full'} objectFit={"cover"}/> */}
            <Portal>
                <PopoverContent>
                    <Box display={'flex'} flexDir={'column'} alignItems={'center'} p={7}>
                        <Avatar src={user.avatar} size={'lg'} name={user.name} rounded={'full'} objectFit={'cover'} />
                        <Text mt={2} fontWeight={'medium'}>{user.name}</Text>
                        <VStack mt={7} alignSelf={'flex-start'} alignItems={'start'} spacing={4} w={'100%'}>
                            <Text fontSize={'sm'} color={'black'} as={Link} variant={'ghost'}>Upload design work</Text>
                            <Text fontSize={'sm'} color={'black'} as={Link} variant={'ghost'}>Work preferences</Text>
                            <Text fontSize={'sm'} color={'black'} as={Link} variant={'ghost'}>Settings</Text>
                            <Divider w={'100%'}/>
                            <Text fontSize={'sm'} color={'black'} onClick={signOutHandler} as={Link} variant={'ghost'}>Sign out</Text>
                        </VStack>
                    </Box>
                </PopoverContent>
            </Portal>
        </Popover>
    )
}

export default UserModal