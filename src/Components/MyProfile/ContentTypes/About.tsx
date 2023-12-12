import { Box, Textarea, Text, Button, Divider, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Input } from "@chakra-ui/react"
import React, { useRef, useState } from "react"
import AboutTextArea from "./AboutComponents/AboutTextArea"
import AboutSkills from "./AboutComponents/AboutSkills"
import AboutLinks from "./AboutComponents/AboutLinks"
import { LinkI, LinksI } from "../../../Redux/types"



const About:React.FC = () => {
    const [description, setDescription] = useState<string>('')
    const [skills, setSkills] = useState<Array<string>>([])
    const [links, setLinks] = useState<LinkI[]>([])
    const [skill, setSkill] = useState<string>('')
    const [textarea, setTextarea] = useState<boolean>(true)

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

    const deleteLinkHandler = (href: string) => {
        setLinks(prev => prev.filter(item => item.href !== href))
    }


    return(
        <Box mt={10} display={'flex'} justifyContent={'space-evenly'} alignItems={'start'} height={'fit-content'}>
            <AboutTextArea description={description} setDescription={setDescription}/>
            <AboutSkills addSkillHandler={addSkillHandler} deleteSkillHandler={deleteSkillHandler} setSkill={setSkill} skill={skill} skills={skills}/>
            <AboutLinks links={links} AddLinkHandler={AddLinkHandler} setLinks={setLinks} deleteLinkHandler={deleteLinkHandler}/>
        </Box>
    )
}


export default About