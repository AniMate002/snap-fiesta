import { Box, Heading, Image, Text, Flex, Input, FormControl, Button, Divider } from "@chakra-ui/react"
import bg from '../images/bg.jpg'
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import LogInComponent from "../Components/Auth/LogInComponent"
import SignUpComponent from "../Components/Auth/SignUpComponent"
import LoadingModalWindow from "../Components/LodaingModalWindow"
import { useAppSelector } from "../Redux/hooks"

const AuthPage:React.FC = () => {
    const [search, setSearch] = useSearchParams()
    const { isAuth, isLoading } = useAppSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if(!search.get('var'))
            setSearch({var: 'logIn'})
    }, [])
    useEffect(() => {
        if(isAuth)
            navigate('/', {replace: true})
    }, [isAuth])
    const changeVariant = ():void => {
        setSearch({var: search.get('var') === 'logIn' ? 'signUp' : 'logIn'})
    }
    return(
        <Box display={['block', 'flex']} position={'relative'}>
            <LoadingModalWindow isLoading={isLoading}/>
            <Box 
                w={'50%'} 
                h={'100vh'} 
                bgPosition={'center'} 
                bgSize={'cover'} 
                bgImage={bg} p={10} 
                display={['none','none','flex']} 
                flexDir={'column'} 
                alignItems={'start'}>
                <Heading to={'/'} as={Link} color={'white'} fontFamily={'revert-layer'} mb={10}>SnapFiesta</Heading>
                <Text letterSpacing={[0,0,2,3]} color={'white'} fontWeight={'bold'} fontSize={['','','3xl','5xl']} as="h2">Welcome to SnapFiesta!</Text>
                <Text color={'white'} fontSize={['','','md','lg']}>Unleash your creativity, frame the extraordinary. Our photo app is more than pixels; it's a canvas for your memories. Elevate every moment with seamless snapshots, turning life's journey into a breathtaking visual story.</Text>
                <Flex mt={'auto'} gap={5} fontSize={'1.7rem'} color={'grey'} alignSelf={'center'}>
                    <Text as={Link} to={'/'} className="fa-brands fa-instagram" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                    <Text as={Link} to={'/'} className="fa-brands fa-telegram" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                    <Text as={Link} to={'/'} className="fa-brands fa-discord" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                    <Text target='_blank' as={Link} to={'https://github.com/AniMate002'} className="fa-brands fa-github" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                </Flex>
            </Box>
            {
                    search.get('var') === 'logIn' ? <LogInComponent changeVariant={changeVariant}/> : <SignUpComponent changeVariant={changeVariant}/>
            }
            
        </Box>
    )
}

export default AuthPage