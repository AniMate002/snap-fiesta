import { Box, Image, Card, CardHeader, Flex, IconButton, Avatar, CardBody, Text, Button, CardFooter, Heading, Icon} from '@chakra-ui/react'
import { Photo } from 'pexels'
import { Link } from 'react-router-dom'
import ImageAnimated from './ImageAnimated'
import { PhotoWithHashTags } from '../../../Redux/Slices/imageSlice'

interface ImageCardProps extends PhotoWithHashTags {}

const ImageCard:React.FC<ImageCardProps> = ({id, photographer, src, alt, liked, photographer_url, avg_color, hashTags}) => (
    <Box border={'none'} shadow={'none'}>
        <Box>
            <ImageAnimated photographer={photographer} src={src} alt={alt} avg_color={avg_color} hashTags={hashTags} id={id}/>
            <Flex gap='4'>
                {/* <Avatar name={photographer}/> */}
                <Box display={'flex'} alignItems={'center'} gap={2} cursor={'pointer'} as='a' href={photographer_url} target='_blank'>
                    <Avatar showBorder={true} size={'sm'} name={photographer}/>
                    <Text cursor={'default'} size='sm' fontWeight={'medium'} _hover={{"color":'#ff436cff'}}>{photographer}</Text>
                    {/* <Text fontSize={'sm'} to={photographer_url} as={Link}>Check me out</Text> */}
                </Box>
                <Box ml={'auto'}>
                    <Text fontSize={'0.8rem'}  color={'#85888c'}><Text color={'#85888c'} mr={2} fontSize={'0.7rem'} className="fa-solid fa-heart"></Text>{(Math.random()).toFixed(2)}k</Text>
                    <Text fontSize={'0.8rem'}  color={'#85888c'}><Text color={'#85888c'} mr={2} fontSize={'0.7rem'} className="fa-solid fa-eye"></Text>{(Math.random()).toFixed(2)}k</Text>
                </Box>
            </Flex>
        </Box>
    </Box>
)

export default ImageCard