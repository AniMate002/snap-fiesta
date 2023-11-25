import { Box, Heading, Input, Text, Flex, Button, FormControl, Divider} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface SignUpComponentProps {
    changeVariant: () => void
}

const SignUpComponent:React.FC<SignUpComponentProps> = ({changeVariant}) => {
    return(
        <Box py={'100px'} px={'150px'} w={'50%'} height={'100vh'}>
                <Heading fontSize={'5xl'} fontFamily={'quicksand'} mb={20}>Sign up</Heading>
                <FormControl >
                    <Box position={'relative'} mb={10}>
                        <Text rounded={'full'} fontSize={'xl'} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Name</Text>
                        <Input bgColor={'white'} focusBorderColor="red.400" type="text" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={7} px={7} fontSize={'xl'}/>
                    </Box>
                    <Box position={'relative'} mb={10}>
                        <Text rounded={'full'} fontSize={'xl'} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Email</Text>
                        <Input bgColor={'white'} focusBorderColor="red.400" type="email" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={7} px={7} fontSize={'xl'}/>
                    </Box>
                    <Box position={'relative'}>
                        <Text rounded={'full'} fontSize={'xl'} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Password</Text>
                        <Input focusBorderColor="red.400" type="password" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={7} px={7} fontSize={'xl'}/>
                    </Box>
                    <Button mt={10} bg={'red.400'} color={'white'} py={7} rounded={'full'} w={'100%'} type="submit">Create account</Button>
                    <Flex mt={10} alignItems={'center'} gap={2}>
                        <Text color={'grey'} fontSize={'xl'} fontWeight={'medium'}>or Login with</Text>
                        <Text fontSize={'xl'} color={'red.400'} as={Link} className="fa-brands fa-google"></Text>
                        <Text fontSize={'xl'} color={'red.400'} as={Link} className="fa-brands fa-facebook"></Text>
                    </Flex>
                    <Divider my={10} borderWidth={2}/>
                    <Box fontWeight={'medium'} fontSize={'lg'} display={'flex'} gap={2}>
                        <Text color={'grey'}>Already have account?</Text>
                        <Text onClick={changeVariant} fontWeight={'bold'} cursor={'pointer'} color={'red.400'}>Log in</Text>
                    </Box>
                </FormControl>
            </Box>
    )
}

export default SignUpComponent