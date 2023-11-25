import { Box, Heading, Text, FormControl, Divider, Button, Flex, Input, useStatStyles } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../Redux/hooks'
import React, { FormEventHandler, useState } from 'react'
import { logInUser } from '../../Redux/Slices/userSlice'
import { formLogInI } from '../../Redux/types'

interface logInComponentProps {
    changeVariant: () => void
}



const LogInComponent:React.FC<logInComponentProps> = ({changeVariant}) => {
    const [form, setForm] = useState<formLogInI>({
        email: '',
        password: ''
    })

    const submitHandler = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        dispatch(logInUser(form))
        console.log(form)
    }



    const dispatch = useAppDispatch()
    return(
        <Box py={'100px'} px={'150px'} w={'50%'} height={'100vh'}>
            <Heading fontSize={'5xl'} fontFamily={'quicksand'} mb={20}>Log in</Heading>
            <form onSubmit={(e) => submitHandler(e)}>
                <Box position={'relative'} mb={10}>
                    <Text rounded={'full'} fontSize={'xl'} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Email</Text>
                    <Input value={form.email} onChange={e => setForm(prev => {return {...prev, email: e.target.value}})} bgColor={'white'} focusBorderColor="red.400" type="email" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={7} px={7} fontSize={'xl'}/>
                </Box>
                <Box position={'relative'}>
                    <Text rounded={'full'} fontSize={'xl'} position={'absolute'} p={2} bg={'white'} zIndex={90} top={-6} left={6} cursor={'default'} color={'grey'}>Password</Text>
                    <Input value={form.password} onChange={e => setForm(prev => {return {...prev, password: e.target.value}})} focusBorderColor="red.400" type="password" borderColor={'red.200'} borderWidth={2} rounded={'full'} py={7} px={7} fontSize={'xl'}/>
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
                    <Text onClick={changeVariant} fontWeight={'bold'} cursor={'pointer'} color={'red.400'}>Sign up</Text>
                </Box>
            </form>
        </Box>
    )
}

export default LogInComponent