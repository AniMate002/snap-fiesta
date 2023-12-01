import { Box, Button } from "@chakra-ui/react"
import { ArrowUpIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react"


const ArrowUp:React.FC = () => {
    const [scroll, setScroll] = useState<number>(0)
    const handleScroll = ():void => {
        const position:number = window.pageYOffset;
        setScroll(position)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true})
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    const handleClick = ():void => {
        window.scrollTo(0,0)
    }
    return(
        <Button onClick={handleClick} hidden={window.pageYOffset === 0} position={'fixed'} bottom={10} right={10} rounded={'full'} bg={'red.400'} color={'white'} fontWeight={'bold'} p={5}>
            <i className="fa-solid fa-arrow-up"></i>
        </Button>
    )
}

export default ArrowUp