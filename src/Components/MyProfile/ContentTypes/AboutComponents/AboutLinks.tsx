import { Box, Button, Flex, VStack, Text, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody, RadioGroup, Radio, Input, Divider, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { LinkI, LinksI } from '../../../../Redux/types';
import { EditIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface AboutLinksI {
    links: LinkI[]
    setLinks: (links: LinkI[]) => void
    AddLinkHandler: (link: LinkI) => void
}


const AboutLinks:React.FC<AboutLinksI> = ({links, setLinks, AddLinkHandler}) => {
    const [radio, setRadio] = useState<string>('x-twitter')
    const [href, setHref] = useState<string>('')

    const formHandler = (e:React.FormEvent<HTMLFormElement>) => {
        if(href !== ''){
            e.preventDefault()
            AddLinkHandler({name:radio, href});
        }
    }

    const renderedLinks = links.map(link => {
        return <Button key={link.href} target='_blank' as={Link} to={link.href}><Text className={`fa-brands fa-${link.name}`}></Text></Button>
    })

    return (  
        <VStack alignItems={'start'}>
            <Text textDecoration={'underline'} color={'red.400'} fontWeight={'medium'} fontSize={'xl'} mb={2}>Links</Text>
            <Text maxWidth={'300px'} display={'flex'} flexWrap={'wrap'} my={5} gap={2}>
                {links.length === 0 ? 
                <Text color={'grey'}>No links added</Text> 
                : 
                renderedLinks}
            </Text>
            <Popover>
                <PopoverTrigger>
                    <Button rightIcon={<EditIcon />} rounded={'full'} variant={'outline'}>Edit links</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        <form onSubmit={e => formHandler(e)}>
                            <RadioGroup defaultValue='x-twitter' value={radio} onChange={setRadio}>
                                <Radio mr={5} colorScheme='gray' value='x-twitter'><Text color={'black'} className="fa-brands fa-x-twitter"></Text></Radio>
                                <Radio mr={5} colorScheme='facebook' value='facebook-f'><Text color={'blue.600'} className="fa-brands fa-facebook-f"></Text></Radio>
                                <Radio mr={5} colorScheme='messenger' value='facebook-messenger'><Text color={'pink.400'} className="fa-brands fa-facebook-messenger"></Text></Radio>
                                <Radio colorScheme='gray' value='github'><Text color={'black'} className="fa-brands fa-github"></Text></Radio>
                            </RadioGroup>
                            <Divider my={5}/>
                            <InputGroup>
                                <InputLeftElement><Text color={'red.400'} className="fa-solid fa-link"></Text></InputLeftElement>
                                <Input value={href} onChange={e => setHref(e.target.value)} focusBorderColor='red.400' type='text' placeholder='Link to...'/>
                            </InputGroup>
                            <Button isDisabled={href === ''} type='submit' w={'full'} rounded={'full'} mt={5}>Submit</Button>
                        </form>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </VStack>
    );
}
 
export default AboutLinks;