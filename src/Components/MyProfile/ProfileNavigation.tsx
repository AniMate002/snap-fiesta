import { Box, Button, Heading, Divider, Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"






const ProfileNavigation:React.FC = () => {
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
        <Flex gap={4} justifyContent={['center','start']}>
                <Button onClick={() => changeTypeHandler('My works')} fontSize={['12px', 'sm']} bg={checkBg('My works')} rounded={'full'}>My works</Button>
                <Button onClick={() => changeTypeHandler('Liked')} fontSize={['12px', 'sm']} bg={checkBg('Liked')} rounded={'full'}>Liked</Button>
                <Button onClick={() => changeTypeHandler('About')} fontSize={['12px', 'sm']} bg={checkBg('About')} rounded={'full'}>About</Button>
            </Flex>
    )
}

export default ProfileNavigation