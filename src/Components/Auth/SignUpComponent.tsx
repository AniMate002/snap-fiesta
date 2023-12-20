import { Box, Heading, Input, Text, Flex, Button, FormControl, Divider} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formSignUp } from '../../Redux/types'
import { useAppDispatch } from '../../Redux/hooks'
import { createUser } from '../../Redux/Slices/userSlice'

interface SignUpComponentProps {
    changeVariant: () => void
}



const SignUpComponent:React.FC<SignUpComponentProps> = ({changeVariant}) => {
    const dispatch = useAppDispatch()
    const [form, setForm] = useState<formSignUp>({
        avatar: 'https://images.pexels.com/photos/339379/pexels-photo-339379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: '',
        name: '',
        password: ''
    })

    const submitHandler = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        console.log(form)
        dispatch(createUser(form))
        
    }

    const changeField = (e:React.ChangeEvent<HTMLInputElement>, field: string):void => {
        setForm(prev => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }

    return(
        <Box py={['20px', '20px','20px','15px','100px']} px={['20px','20px', '20px','30px', '150px']} w={['100%','100%', '100%','50%']} height={'100vh'}>
                <Heading fontSize={['3xl', '3xl','3xl', '4xl', '5xl']} fontFamily={'quicksand'} mb={[20, 20, 10, 10, 20]}>Sign up</Heading>
                <form onSubmit={e => submitHandler(e)}>
                    <Box position={'relative'} mb={10}>
                        <Text rounded={'full'} fontSize={['md', 'xl']} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Name</Text>
                        <Input required value={form.name} onChange={e => changeField(e, 'name')} name='name' bgColor={'white'} focusBorderColor="red.400" type="text" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={[3,7]} px={7} fontSize={'xl'}/>
                    </Box>
                    <Box position={'relative'} mb={10}>
                        <Text rounded={'full'} fontSize={['md', 'xl']} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Email</Text>
                        <Input required value={form.email} onChange={e => changeField(e, 'email')} bgColor={'white'} focusBorderColor="red.400" type="email" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={[3, 7]} px={7} fontSize={'xl'}/>
                    </Box>
                    <Box position={'relative'}>
                        <Text rounded={'full'} fontSize={['md', 'xl']} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Password</Text>
                        <Input required value={form.password} onChange={e => changeField(e, 'password')} focusBorderColor="red.400" type="password" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={[3, 7]} px={7} fontSize={'xl'}/>
                    </Box>
                    <Button mt={[5, 10]} bg={'red.400'} color={'white'} py={[3, 7]} rounded={'full'} w={'100%'} type="submit">Create account</Button>
                    <Flex mt={10} alignItems={'center'} gap={2}>
                        <Text color={'grey'} fontSize={['md', 'xl']} fontWeight={'medium'}>or Login with</Text>
                        <Text fontSize={'xl'} color={'red.400'} as={Link} className="fa-brands fa-google"></Text>
                        <Text fontSize={'xl'} color={'red.400'} as={Link} className="fa-brands fa-facebook"></Text>
                    </Flex>
                    <Divider my={[5,5, 5,5,10]} borderWidth={2}/>
                    <Box fontWeight={'medium'} fontSize={['md', 'lg']} display={'flex'} gap={2}>
                        <Text color={'grey'}>Already have account?</Text>
                        <Text onClick={changeVariant} fontWeight={'bold'} cursor={'pointer'} color={'red.400'}>Log in</Text>
                    </Box>
                </form>
            </Box>
    )
}

export default SignUpComponent