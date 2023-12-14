import { Avatar, Box, Button, Heading, Text, VStack } from "@chakra-ui/react"
import { useAppSelector } from "../../Redux/hooks"
import { EditIcon } from '@chakra-ui/icons'


const ProfileTitle:React.FC = () => {
    const  { user, isLoading} = useAppSelector(state => state.user)
    return(
        <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} mt={20} gap={7}>
            <Avatar border={'2px solid #f56a6bff'} name={user.name} src={user.avatar} size={'2xl'}/>
            <VStack alignItems={'flex-start'}>
                <Heading  as={'h1'} color={'red.400'}>{user.name}</Heading>
                <Text>{user.email}</Text>
            </VStack>
            <Button variant={'ghost'} fontSize={'sm'} leftIcon={<EditIcon />}>Edit profile</Button>
        </Box>
    )
}

export default ProfileTitle