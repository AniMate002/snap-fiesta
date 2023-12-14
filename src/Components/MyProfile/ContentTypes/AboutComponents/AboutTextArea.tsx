import { EditIcon } from "@chakra-ui/icons"
import { Box, Button, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react"

interface AboutTextAreaI {
    description: string
    setDescription: (desc:string) => void
}

const AboutTextArea:React.FC<AboutTextAreaI> = ({description, setDescription}) => {
    const [edit, setEdit] = useState<boolean>(false)
    return(
        <Box maxW={['400px', '400px', '300px','400px']} >
            <Text textDecoration={'underline'} color={'red.400'} fontWeight={'medium'} fontSize={'xl'} mb={2}>Description</Text>
            <Box display={edit ? 'block' : 'none'}>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} bgColor={'#f9f9f9'} cols={40} resize={'vertical'} placeholder="Add your description..."/>
            </Box>
            <Box display={edit ? 'none' : 'block'}>
                <Text>{description}</Text>
            </Box>
            <Button display={edit ? 'none' : 'block'} fontSize={'sm'} mt={[3, 3, 5, 7]} rounded={'full'} variant={'outline'}  onClick={() => setEdit(prev => !prev)} ><EditIcon fontSize={'sm'}/></Button>
            <Button display={edit ? 'block' : 'none'} fontSize={'sm'} bgColor={'red.400'} color={'white'} mt={[3, 3, 5, 7]} rounded={'full'}  onClick={() => setEdit(prev => !prev)} >Save</Button>

        </Box>
    )
}

export default AboutTextArea