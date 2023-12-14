import { Box, Textarea, Text, Button, Divider, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Input, useToast } from "@chakra-ui/react"
import React, { useEffect, useRef, useState } from "react"
import AboutTextArea from "./AboutComponents/AboutTextArea"
import AboutSkills from "./AboutComponents/AboutSkills"
import AboutLinks from "./AboutComponents/AboutLinks"
import { LinkI, LinksI, confI, localStorageSnapFiestaAboutConfig } from "../../../Redux/types"



const About:React.FC = () => {
    const [description, setDescription] = useState<string>('')
    const [skills, setSkills] = useState<Array<string>>([])
    const [links, setLinks] = useState<LinkI[]>([])
    const [skill, setSkill] = useState<string>('')
    const [textarea, setTextarea] = useState<boolean>(true)
    const toast = useToast()

    const addSkillHandler = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault()
        if(skill.trim() !== ''){
            setSkills(prev => [...prev, skill])
            setSkill('')
        }
        
    }

    const AddLinkHandler = (link: LinkI):void => {
        setLinks(prev => [...prev, link])
    }

    const deleteSkillHandler = (skill:string) => {
        setSkills(prev => prev.filter(item => item !== skill))
    }


    const saveConfigHandler = () => {
        const confToSave:confI = {
            description,
            skills,
            links
        }
        localStorage.setItem(localStorageSnapFiestaAboutConfig, JSON.stringify(confToSave))
        toast({
            title: 'Success',
            description: 'Configuration was saved',
            status: 'success',
            duration: 4000,
            isClosable: true
        })
    }

    useEffect(() => {
        const localSt = localStorage.getItem(localStorageSnapFiestaAboutConfig)
        if(localSt){
            const confToSet:confI = JSON.parse(localSt)
            setDescription(confToSet.description)
            setSkills(confToSet.skills)
            setLinks(confToSet.links)
            toast({
                title: 'Success',
                description: 'Configuration was loaded',
                status: 'success',
                duration: 1000,
                isClosable: true
            })
        }
    }, [])

    return(
        <Box>
            <Box mt={10} display={'flex'} justifyContent={'space-around'} alignItems={'start'} height={'fit-content'}>
                <AboutTextArea description={description} setDescription={setDescription}/>
                <AboutSkills addSkillHandler={addSkillHandler} deleteSkillHandler={deleteSkillHandler} setSkill={setSkill} skill={skill} skills={skills}/>
                <AboutLinks links={links} AddLinkHandler={AddLinkHandler} setLinks={setLinks}/>
            </Box>
            <Button onClick={saveConfigHandler} textTransform={'uppercase'} color={'white'} bg={'red.400'} display={'block'} my={10} mx={'auto'}>Save configuration</Button>
        </Box>
    )
}


export default About