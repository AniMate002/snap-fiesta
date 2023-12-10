import { Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { userI } from "../../../Redux/types"
import ImageCard from "../../HomePageComponents/ListOfAllImages/ImageCard"

interface LikedI extends userI {}

const Liked:React.FC<LikedI> = ({liked}) => {
    const renderedLiked = liked?.map((item) => {
        return <ImageCard key={item.id} {...item} />
    })
    return(
        liked === undefined || liked.length === 0 ?  
        <Heading textAlign={'center'} color={'red.400'} height={'20vh'} mt={10} fontSize={'2xl'}>You haven't liked anything yet <i className="fa-regular fa-face-sad-tear fa-bounce"></i></Heading> 
        :
        <SimpleGrid columns={4} gap={10}>
            {renderedLiked}
        </SimpleGrid>  

    )
}

export default Liked