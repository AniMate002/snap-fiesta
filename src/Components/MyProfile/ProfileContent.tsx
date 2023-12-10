import { Box, Button, Heading, Divider, Flex, Spinner } from "@chakra-ui/react"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MyWorks from "./ContentTypes/MyWorks"
import { useAppSelector } from "../../Redux/hooks"
import Liked from "./ContentTypes/Liked"




const ProfileContent:React.FC = () => {
    const [search, setSearch] = useSearchParams()
    const { isLoading, user } = useAppSelector(state => state.user)
    const changeTypeHandler = (type: string):void => {
        setSearch({type: type})
    }
    let content;
    if(search.get('type') === 'My works')
        content = <MyWorks {...user}/>
    else if(search.get('type') === 'Liked')
        content = <Liked {...user} />
    return(
        <Box>
            <Heading textAlign={'center'} my={5} as={'h2'}>{search.get('type')}</Heading>
            {isLoading ?  <Spinner display={'block'} mx={'auto'} my={20} color={'red.400'} size={'xl'} thickness={'5px'}/>  : content}
        </Box>
    )
}

export default ProfileContent