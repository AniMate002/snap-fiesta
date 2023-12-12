import { Box, Text, Textarea } from "@chakra-ui/react"

interface AboutTextAreaI {
    description: string
    setDescription: (desc:string) => void
}

const AboutTextArea:React.FC<AboutTextAreaI> = ({description, setDescription}) => {
    return(
        <Box>
            <Text textDecoration={'underline'} color={'red.400'} fontWeight={'medium'} fontSize={'xl'} mb={2}>Description</Text>
            <Textarea value={description} onChange={(e) => setDescription(e.target.value)} bgColor={'#f9f9f9'} rows={10} cols={40} resize={'vertical'} placeholder="Add your description..."/>
        </Box>
    )
}

export default AboutTextArea