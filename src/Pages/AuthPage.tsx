import { Box, Heading, Image, Text, Flex, Input, FormControl, Button, Divider } from "@chakra-ui/react"
import bg from '../images/bg.jpg'
import { Form, Link } from "react-router-dom"

const AuthPage:React.FC = () => {
    return(
        <Box display={'flex'} position={'relative'}>
            <Box position={'absolute'} top={0} left={0} w={'50%'} h={'100vh'} bgPosition={'center'} bgSize={'cover'} bgImage={bg} p={10} display={'flex'} flexDir={'column'} alignItems={'start'}>
                <Heading to={'/'} as={Link} color={'white'} fontFamily={'revert-layer'} mb={10}>SnapFiesta</Heading>
                <Text letterSpacing={3} color={'white'} fontWeight={'bold'} fontSize={'5xl'} as="h2">Welcome to SnapFiesta!</Text>
                <Text color={'white'} fontSize={'lg'}>Unleash your creativity, frame the extraordinary. Our photo app is more than pixels; it's a canvas for your memories. Elevate every moment with seamless snapshots, turning life's journey into a breathtaking visual story.</Text>
                <Flex mt={'auto'} gap={5} fontSize={'1.7rem'} color={'grey'}>
                    <Text as={Link} to={'/'} className="fa-brands fa-instagram" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                    <Text as={Link} to={'/'} className="fa-brands fa-telegram" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                    <Text as={Link} to={'/'} className="fa-brands fa-discord" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                    <Text target='_blank' as={Link} to={'https://github.com/AniMate002'} className="fa-brands fa-github" _hover={{color:'red.400'}} transition={'all .2s ease'}></Text>
                </Flex>
            </Box>
            <Box w={'50%'} height={'100vh'}>
                fewfwf
            </Box>
            <Box py={'100px'} px={'150px'} w={'50%'} height={'100vh'}>
                <Heading fontSize={'5xl'} fontFamily={'quicksand'} mb={20}>Log in</Heading>
                <FormControl >
                    <Box position={'relative'} mb={10}>
                        <Text fontSize={'xl'} position={'absolute'} p={2} bg={'white'} zIndex={100} top={-6} left={6} cursor={'default'} color={'grey'}>Email</Text>
                        <Input bgColor={'white'} focusBorderColor="red.400" type="email" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={7} px={7} fontSize={'xl'}/>
                    </Box>
                    <Box position={'relative'}>
                        <Text fontSize={'xl'} position={'absolute'} p={2} bg={'white'} zIndex={100} top={-6} left={6} cursor={'default'} color={'grey'}>Password</Text>
                        <Input focusBorderColor="red.400" type="password" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={7} px={7} fontSize={'xl'}/>
                    </Box>
                    <Text display={'flex'} justifyContent={'end'} mt={2} color={'grey'} as={Link}>Forget password?</Text>
                    <Button mt={10} bg={'red.400'} color={'white'} py={7} rounded={'full'} w={'100%'} type="submit">Log in</Button>
                    <Flex mt={10} alignItems={'center'} gap={2}>
                        <Text color={'grey'} fontSize={'xl'} fontWeight={'medium'}>or Login with</Text>
                        <Text fontSize={'xl'} color={'red.400'} as={Link} className="fa-brands fa-google"></Text>
                        <Text fontSize={'xl'} color={'red.400'} as={Link} className="fa-brands fa-facebook"></Text>
                    </Flex>
                    <Divider my={10} borderWidth={2}/>
                    <Box fontWeight={'medium'} fontSize={'lg'} display={'flex'} gap={2}>
                        <Text color={'grey'}>Don't have account?</Text>
                        <Text fontWeight={'bold'} as={Link} color={'red.400'}>Sign up</Text>
                    </Box>
                </FormControl>
            </Box>
        </Box>
    )
}

export default AuthPage