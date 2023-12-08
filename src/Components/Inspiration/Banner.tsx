import { Box, Divider, Heading, Image } from "@chakra-ui/react"
import { useAppSelector } from "../../Redux/hooks"



const Banner = () => {
    const { imageOfTheDay, wordOfTheDay } = useAppSelector(state => state.images.inspiration)

    return(
        <Box my={20} w={'100%'} rounded={'lg'} height={'200px'} overflow={'hidden'} position={'relative'}>
            <Image _hover={{transform: 'scale(1.3)'}} transition={'all 0.2s ease'} src={imageOfTheDay} w={'100%'} display={'flex'} mt={'-30%'}/>
            <Heading fontSize={'6xl'}  letterSpacing={5} textTransform={'uppercase'} as={'h1'} color={'white'} position={'absolute'} top={'60px'} left={2} mx={'auto'}>Word of the day is </Heading>
            <Heading fontSize={'6xl'} letterSpacing={10} textTransform={'uppercase'} as={'h1'} color={'white'} position={'absolute'} top={'60px'} right={0} mx={'auto'}>{wordOfTheDay}</Heading>
        </Box>
    )
}

export default Banner