import { Box, Divider, Heading, Image } from "@chakra-ui/react"
import { useAppSelector } from "../../Redux/hooks"



const Banner = () => {
    const { imageOfTheDay, wordOfTheDay } = useAppSelector(state => state.images.inspiration)

    return(
        <Box my={20} w={'100%'} rounded={'lg'} height={[ '100px', '200px',  '200px']} overflow={'hidden'} position={'relative'}>
            <Image _hover={{transform: 'scale(1.3)'}} transition={'all 0.2s ease'} src={imageOfTheDay} w={'100%'} display={'flex'} mt={['-10%','0', '-30%']}/>
            <Heading fontSize={['xl','4xl', '6xl']}  letterSpacing={5} textTransform={'uppercase'} as={'h1'} color={'white'} position={'absolute'} top={[0,0, '30px']} left={2} mx={'auto'}>Word of the day is </Heading>
            <Heading fontSize={['xl', '6xl']} letterSpacing={10} textTransform={'uppercase'} as={'h1'} color={'white'} position={'absolute'} top={['auto','auto', '80px']} bottom={0} left={[2, 'auto']} right={['auto',0]} mx={'auto'}>{wordOfTheDay}</Heading>
        </Box>
    )
}

export default Banner