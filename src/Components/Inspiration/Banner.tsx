import { Box, Image } from "@chakra-ui/react"
import { useAppSelector } from "../../Redux/hooks"



const Banner = () => {
    const { imageOfTheDay } = useAppSelector(state => state.images.inspiration)

    return(
        <Box w={'100%'}>
            <Image src={imageOfTheDay}/>
        </Box>
    )
}

export default Banner