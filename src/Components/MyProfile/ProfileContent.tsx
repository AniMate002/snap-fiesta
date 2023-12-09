import { Box, Button, Heading, Divider, Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"




const ProfileContent:React.FC = () => {
    const [search, setSearch] = useSearchParams()
    const changeTypeHandler = (type: string):void => {
        setSearch({type: type})
    }
    const checkBg = (name: string):string => {
        const query = search.get('type')
        if(query === name)
            return '#edf2f7ff'
        else
            return 'white'
    }
    useEffect(() => {
        if(!search.get('type'))
            setSearch({type: 'My works'})
    }, [])
    return(
        <Box>
            <Divider my={10} colorScheme={'red.400'}/>
            <Flex gap={4}>
                <Button onClick={() => changeTypeHandler('My works')} fontSize={'sm'} bg={checkBg('My works')} rounded={'full'}>My works</Button>
                <Button onClick={() => changeTypeHandler('Liked')} fontSize={'sm'} bg={checkBg('Liked')} rounded={'full'}>Liked</Button>
                <Button onClick={() => changeTypeHandler('About')} fontSize={'sm'} bg={checkBg('About')} rounded={'full'}>About</Button>
            </Flex>
        </Box>
    )
}

export default ProfileContent