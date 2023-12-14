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
        <Heading textAlign={'center'} color={'red.400'} height={'20vh'} mt={[5, 5, 7, 10]} fontSize={['xl', '2xl']}>You haven't liked anything yet <i className="fa-regular fa-face-sad-tear fa-bounce"></i></Heading> 
        :
        <SimpleGrid mb={10} columns={[1, 2, 3, 4]} gap={10}>
            {renderedLiked}
        </SimpleGrid>  

    )
}

export default Liked