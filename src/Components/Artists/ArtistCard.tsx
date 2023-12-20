import { Avatar, Box, Button, Collapse, Flex, Text, useDisclosure, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import { artistI, userI } from "../../Redux/types";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { client } from "../../Redux/Slices/imageSlice";
import { Photo, Photos } from "pexels";


interface ArtistCardI extends artistI{}

const ArtistCard:React.FC<ArtistCardI> = ({first_name, last_name, profile_picture, email, country, id}) => {
    const controls = useAnimationControls()
    const [isHoverd, setIsHovered] = useState<boolean>(false)
    const { isOpen, onToggle} = useDisclosure()
    const [works, setWorks] = useState<Photo[]>([])

    const ArrorClickHandler = () => {
        onToggle()
        controls.start({ rotate: isOpen ? 0 : 180 })
        geterateWorksOfRtist()
    }

    async function geterateWorksOfRtist ():Promise<void> {
        try{
            const res = await client.photos.curated({per_page: 6, page: id * 10}) as Photos
            const data = res.photos
            if(!data)
                throw new Error('error has accured')
            // return data
            setWorks(data)
        }catch(e){    
            throw e;
        }
    }

    const generatedImages = works.map(item => {
        return <Box rounded={'lg'} w={['100%', '100%']} height={['70px','150px','140px','200px']} overflow={'hidden'} bgImage={item.src.large} bgPos={'center'} bgRepeat={'no-repeat'} bgSize={'cover'} />
    })

    return (  
        <Box onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} flexWrap={'wrap'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} border={'2px solid'} borderColor={'white'} bgColor={'red.50'} rounded={'2xl'} w={'100%'} px={5} py={5} _hover={{shadow: '7px 7px 0px #f56a6b', borderWidth:2, borderColor:'red.400'}} transition={'all 0.2s ease'}>
            <Flex gap={4} alignItems={'center'}  >
                <Avatar name={first_name + " " + last_name} src={profile_picture} size={['sm', 'sm', 'md']}></Avatar>
                <Box>
                    <Text fontWeight={'medium'} fontSize={['sm', 'sm', 'lg', 'xl']} display={'flex'} gap={2}> 
                        {first_name}{last_name} 
                        <Text fontWeight={'medium'} px={1} py={1} fontSize={'10px'} rounded={'sm'} bg={'#edf2f7'}>{country}</Text>
                    </Text>
                    <Text fontSize={['10px','12px']} fontStyle={'italic'} color={'grey'}>{email}</Text>
                </Box>
            </Flex>
            <Button bg={'white'} leftIcon={<i className="fa-regular fa-envelope"></i>} fontSize={['10px','sm']} fontWeight={'mediumm'} mt={[4,4,4,0]} w={['100%', '100%', '100%', 'fit-content']}>Contact</Button>
            <Box w={'100%'}>
                <Text as={motion.div} animate={controls} onClick={ArrorClickHandler}  cursor={'pointer'} color={isHoverd ? 'red.200' : 'white'} _hover={{color: 'red.400'}}  textAlign={'center'}><i className="fa-solid fa-caret-down"></i></Text>
                <Collapse in={isOpen}>
                    {works.length !== 6 ? 
                    <Spinner display={'block'} mx={'auto'} my={10} color={'red.400'} size={'xl'} thickness={'5px'}/> 
                    : 
                    <SimpleGrid columns={[2,3]} gap={4}>
                        {generatedImages}
                    </SimpleGrid>
                    }
                </Collapse>
            </Box>
        </Box>
    );
}
 
export default ArtistCard;