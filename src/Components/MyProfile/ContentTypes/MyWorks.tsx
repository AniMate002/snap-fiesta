import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import { userI } from "../../../Redux/types"
import ImageCard from "../../HomePageComponents/ListOfAllImages/ImageCard"

interface MyWorksI extends userI {}

const MyWorks:React.FC<MyWorksI> = ({myWorks}) => {
    const renderedWorks = myWorks?.map((item) => {
        return <ImageCard key={item.id} {...item} />
    })
    return(
        <SimpleGrid mb={20} columns={[1, 2, 3, 4]} gap={10}>
            {renderedWorks}
        </SimpleGrid>
    )
}

export default MyWorks