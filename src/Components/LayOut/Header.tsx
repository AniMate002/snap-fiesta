import {Box, Heading, Text, Flex, Image, HStack, Container, Stack, InputGroup, InputLeftElement, Input, InputRightElement, useStatStyles, Button, Avatar, Divider, Collapse, useDisclosure, Menu, MenuButton, MenuList, MenuItem, Popover, PopoverTrigger, Portal, PopoverContent, VStack} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import LogoPng from '../../images/logo/logoPng.png'
import HoverLogoPng from '../../images/logo/hoverLogo.png'
import fakeAvatar from '../../images/fakeAvatar.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../Redux/hooks'
import { resetImages, searchImages } from '../../Redux/Slices/imageSlice'
import UserModal from './UserModal'

const Header: React.FC = () => {
    const { isOpen, onToggle } = useDisclosure()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [search, setSearch] = useSearchParams()
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
    const formHandler = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        navigate('/?search=' + searchQuery)
    }
    return(
        <Container maxW={'1500px'} py={7}>
            <Flex  flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} >
                <Text onClick={onToggle} display={['inline-block', 'inline-block', 'none']} className="fa-solid fa-bars"><Heading ml={5} to={'/'} textAlign={'left'} fontSize={['2xl', '4xl']}  mt={[-1, -2]} as={Link}>SnapFiesta</Heading></Text>
                <Heading to={'/'} textAlign={'left'} fontSize={['2xl', '4xl', '4xl']} display={['none', 'none', 'inline-block']} mt={[-1, -2]} as={Link}>SnapFiesta</Heading>
                <HStack display={['none', 'none', 'flex']} ml={[0,0,2,'50px']} mr={[0,0,0,5,0]} spacing={10} alignItems={'center'}>
                    <Text fontSize={['xl', 'xl', 'sm']} fontWeight={'medium'} as={NavLink} to={'/inspiration'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Inspiration</Text>
                    <Text fontSize={['xl', 'xl', 'sm']} textAlign={'center'} fontWeight={'medium'} as={NavLink} to={'/artists?page=1'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Our Artists</Text>
                    <Text fontSize={['xl', 'xl', 'sm']} fontWeight={'medium'} as={NavLink} to={'/'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>#HashTags</Text>
                    <Text fontSize={['xl', 'xl', 'sm']} fontWeight={'medium'} as={NavLink} to={'/'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Trending</Text>
                    <Text fontSize={['xl', 'xl', 'sm']} fontWeight={'medium'} as={NavLink} to={'/'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Styles</Text>
                </HStack>
                <Flex textAlign={'right'} alignItems={'center'} gap={4}>
                    <form onSubmit={e => formHandler(e)}>
                        <InputGroup display={['none', 'none', 'none', 'block']}>
                            <InputLeftElement pointerEvents='none'>
                            {/* <PhoneIcon color='gray.300' /> */}
                            <SearchIcon color={'red.400'}/>
                            </InputLeftElement>
                            <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type='tel' placeholder='Search...' rounded={'full'} focusBorderColor='red.400' backgroundColor={'#E2E8F0'}/>
                        </InputGroup>
                    </form>
                    {
                        isAuth ? 
                            <UserModal user={user}/>
                        :
                            <Box display={'flex'} alignItems={'center'} gap={3}>
                                <Text fontSize={['', '', 'sm']} display={['none','inline']} to='/auth?var=signUp' width={'max-content'} as={Link} color={'#ff436cff'} fontWeight={'bold'} rounded={'xl'} variant={'solid'}>Sign up</Text>
                                <Button fontSize={['', '', 'sm']}  as={Link} to='/auth?var=logIn' border={'2px solid black'} rounded={'xl'} variant={'ghost'}>Log in</Button>
                            </Box>

                    }
                </Flex>               
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Box display={['flex', 'flex', 'none']} flexDirection={'column'} gap={4} borderBottom={'2px solid grey'} py={5} mx={4}>
                    <Text fontWeight={'medium'} as={NavLink} to={'/inspiration'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Inspiration</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/artists?page=1'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Our Artists</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>#HashTags</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Trending</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Styles</Text>
                    <Text fontWeight={'medium'} as={NavLink} to={'/auth?var=logIn'} shadow={'0 0 #ff436cff'} _hover={{textShadow: '-10px 10px #ff436cff',fontWeight:'bold', transition: 'all 0.2s ease'}}>Sing Up</Text>                          
                </Box>
            </Collapse>
        </Container>
    )
}

export default Header