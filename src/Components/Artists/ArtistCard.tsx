import { Avatar, Box, Button, Collapse, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { artistI, userI } from "../../Redux/types";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";


interface ArtistCardI extends artistI{}

const ArtistCard:React.FC<ArtistCardI> = ({first_name, last_name, profile_picture, email, country}) => {
    const controls = useAnimationControls()
    const [isHoverd, setIsHovered] = useState<boolean>(false)
    const { isOpen, onToggle} = useDisclosure()
    
    const ArrorClickHandler = () => {
        onToggle()
        controls.start({ rotate: isOpen ? 0 : 180 })
    }


    return (  
        <Box onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} flexWrap={'wrap'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} border={'1px solid'} borderColor={'red.400'} rounded={'2xl'} w={'100%'} px={5} py={5} _hover={{shadow: '7px 7px 0px #f56a6b', borderWidth:2}} transition={'all 0.2s ease'}>
            <Flex gap={4} alignItems={'center'}  >
                <Avatar name={first_name + " " + last_name} src={profile_picture}></Avatar>
                <Box>
                    <Text fontWeight={'medium'} display={'flex'} gap={2}> 
                        {first_name}{last_name} 
                        <Text fontWeight={'medium'} px={1} py={1} fontSize={'10px'} rounded={'sm'} bg={'#edf2f7'}>{country}</Text>
                    </Text>
                    <Text fontSize={'12px'} fontStyle={'italic'} color={'grey'}>{email}</Text>
                </Box>
            </Flex>
            <Button leftIcon={<i className="fa-regular fa-envelope"></i>} fontSize={'sm'} fontWeight={'mediumm'}>Contact</Button>
            <Box w={'100%'}>
                <Text as={motion.div} animate={controls} onClick={ArrorClickHandler}  cursor={'pointer'} color={isHoverd ? 'red.200' : 'white'} _hover={{color: 'red.400'}}  textAlign={'center'}><i className="fa-solid fa-caret-down"></i></Text>
                <Collapse in={isOpen}>
                    <Box>Collapse</Box>
                </Collapse>
            </Box>
        </Box>
    );
}
 
export default ArtistCard;