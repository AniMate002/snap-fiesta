import { Box, Text, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Input } from "@chakra-ui/react"


interface AboutSkillsI {
    skills: Array<string>
    addSkillHandler: (e:React.FormEvent<HTMLFormElement>) => void
    skill: string
    setSkill: (item: string) => void
    deleteSkillHandler: (skill:string) => void
}

const AboutSkills:React.FC<AboutSkillsI> = ({skill, skills, addSkillHandler, deleteSkillHandler, setSkill}) => {
    const renderedSkills = skills.map(skill => {
        return <Text key={skill} onClick={() => deleteSkillHandler(skill)} textDecoration={'underline'} _hover={{color: 'red.400'}} cursor={'pointer'} mr={2} color={'grey'} fontWeight={'medium'}>{skill},</Text>
    })

    return ( 
        <Box ml={[0,0,'-200px']}>
            <Text textDecoration={'underline'} color={'red.400'} fontWeight={'medium'} fontSize={'xl'} mb={2}>Skills</Text>
            <Text maxWidth={'300px'} display={'flex'} flexWrap={'wrap'} my={5}>{skills.length === 0 ? <Text color={'grey'}>No skills set</Text> : renderedSkills}</Text>
            <Popover>
                <PopoverTrigger>
                    <Button rounded={'full'} variant={'outline'}>Add skill+</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Add skill</PopoverHeader>
                    <PopoverBody>
                        <form onSubmit={e => addSkillHandler(e)}>
                            <Input focusBorderColor="red.400" value={skill} onChange={(e) => setSkill(e.target.value)} type="text" placeholder="Enter your skill..."/>
                            <Button type={'submit'} isDisabled={skill.trim() === ''} mt={2}>Enter</Button>
                        </form>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box>
    );
}
 
export default AboutSkills;