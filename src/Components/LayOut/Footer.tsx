import {FC} from 'react'
import LogoPng from '../../images/logo/logoPng.png'

import {Container, Flex, Heading, Text, Image, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Footer: FC  = () => {
    return(
        <Container maxW={'1500px'} mb={5}>
            <Flex justifyContent={'space-between'} alignItems={'center'} flexDirection={['column']} gap={[5]}>
                <Flex gap={4} fontSize={'sm'} color={'grey'} alignItems={'center'}>
                    <Text textAlign={'center'}>© 2023 Snap Fiesta</Text>
                    <Link to='/'>Terms</Link>
                    <Link to='/'>Privacy</Link>
                    <Link to='/'>Cookies</Link>
                </Flex>
                <Flex flexDir={['column']}>
                    {/* <Heading color={'#ff436c'} fontSize={'1.1rem'} textAlign={'center'}>Made by <br /> Kiryl Shauchenka</Heading>
                    <Image src={LogoPng} alt='Snap Fiesta' objectFit={'contain'} w={'250px'}/> */}
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Heading color={'#ff436c'} fontSize={['sm', '1.1rem']} textAlign={'center'}>Made by <br /> Kiryl Shauchenka</Heading>
                            {/* <BreadcrumbSeparator /> */}
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Image src={LogoPng} alt='Snap Fiesta' objectFit={'contain'} w={['120px', '250px']}/>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>
                <Flex gap={5} fontSize={['xl', '1.7rem']} color={'grey'}>
                    <Text as={Link} to={'/'} className="fa-brands fa-instagram" _hover={{color:'#ff436c'}} transition={'all .2s ease'}></Text>
                    <Text as={Link} to={'/'} className="fa-brands fa-telegram" _hover={{color:'#ff436c'}} transition={'all .2s ease'}></Text>
                    <Text as={Link} to={'/'} className="fa-brands fa-discord" _hover={{color:'#ff436c'}} transition={'all .2s ease'}></Text>
                    <Text target='_blank' as={Link} to={'https://github.com/AniMate002'} className="fa-brands fa-github" _hover={{color:'#ff436c'}} transition={'all .2s ease'}></Text>
                </Flex>
            </Flex>
        </Container>
    )
} 

export default Footer