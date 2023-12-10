import { SimpleGrid } from "@chakra-ui/react"
import { userI } from "../../../Redux/types"
import ImageCard from "../../HomePageComponents/ListOfAllImages/ImageCard"

interface LikedI extends userI {}

const Liked:React.FC<LikedI> = ({liked}) => {
    const renderedLiked = liked?.map((item) => {
        return <ImageCard key={item.id} {...item} />
    })
    return(
        <SimpleGrid columns={4} gap={10}>
            {renderedLiked}
        </SimpleGrid>
    )
}

export default Liked