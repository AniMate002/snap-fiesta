import {Box, Text, Heading, Flex, Image, HStack, Container, Stack, InputGroup, InputLeftElement, Input, InputRightElement, useStatStyles, Button, Avatar} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoPng from '../../images/logo/logoPng.png'
import HoverLogoPng from '../../images/logo/hoverLogo.png'
import fakeAvatar from '../../images/fakeAvatar.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../Redux/hooks'

const Header: React.FC = () => {
    const [hovered, setHovered] = useState<Boolean>(false)
    const { isAuth, user } = useAppSelector(state => state.user)
    const navigate = useNavigate()
    const hoverHandler = ():void => {
        setHovered(prev => !prev)
    }
    const leaveMouseHandler = ():void => {
        setHovered(prev => !prev)
    }
    const goToHome = ():void => {
        navigate('/')
    }
    return(
        <Container maxW={'1500px'}  py={5}>
            <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                {/* <Image onClick={goToHome} cursor={'pointer'} onMouseEnter={hoverHandler} onMouseLeave={leaveMouseHandler} src={hovered ? HoverLogoPng : LogoPng} alt='Snap Fiesta' w={250}/> */}
                <Heading to={'/'} as={Link}>SnapFiesta</Heading>
                <HStack spacing={10} >
                    <Text fontWeight={'medium'} as={NavLink} to={'/inspiration'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Inspiration</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/artists'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Our Artists</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/artists'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>#HashTags</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/artists'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Trending</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/artists'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Styles</Text>
                </HStack>
                <Flex alignItems={'center'} gap={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                        {/* <PhoneIcon color='gray.300' /> */}
                        <SearchIcon color={'red.400'}/>
                        </InputLeftElement>
                        <Input type='tel' placeholder='Search...' rounded={'full'} focusBorderColor='red.400' backgroundColor={'#E2E8F0'}/>
                    </InputGroup>
                    {
                        isAuth ? 
                            <Avatar src={user.avatar} size={'md'} name={user.name} rounded={'full'} objectFit={"cover"}/>
                        :
                            <Box display={'flex'} alignItems={'center'} gap={3}>
                                <Text to='/auth?var=signUp' width={'max-content'} as={Link} color={'#ff436cff'} fontWeight={'bold'} rounded={'xl'} variant={'solid'}>Sign up</Text>
                                <Button as={Link} to='/auth?var=logIn' border={'2px solid black'} rounded={'xl'} variant={'ghost'}>Log in</Button>
                            </Box>

                    }
                </Flex>               
            </Flex>
        </Container>
    )
}

export default Header