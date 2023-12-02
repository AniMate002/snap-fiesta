import { Box, Button, Divider, Flex, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    useDisclosure, } from "@chakra-ui/react"
import { useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { useEffect } from 'react'
import { useAppSelector } from "../../../Redux/hooks"
import { fetchImages, resetImages, searchImages } from "../../../Redux/Slices/imageSlice"
import FilterInNavigation from "./FilterInNavigation"


const Navigation:React.FC = () => {
    // const [isOpenFilter, setIsOpenFilter] = useState(false)
    const {isOpen, onToggle} = useDisclosure()
    const [search, setSearch] = useSearchParams()
    const {images} = useAppSelector(state => state.images)
    const changeTypeHandler = (type: string) => {
        setSearch({type: type})
    }
    const resetTypeHandler = ():void => {
        setSearch({})
    }
    const checkBg = (value:string|null):string => {
        const query:string|null = search.get('type')
        if(query === value)
            return '#edf2f7ff'
        else
            return 'white'
    }
    return(
        <Box mt={10} mb={5} width={'fit-content'} display={'block'} mx={'auto'}>
            <Flex  alignItems={'center'} justifyContent={'center'} gap={4} rounded={'full'} p={2}>
                <Button onClick={resetTypeHandler} bg={checkBg(null)} fontSize={'sm'} rounded={'full'}>Discover</Button>
                <Divider orientation="vertical" borderWidth={1} height={5}/>
                <Button onClick={() => changeTypeHandler('Nature')} fontSize={'sm'} bg={checkBg('Nature')} rounded={'full'}>Nature</Button>
                <Button onClick={() => changeTypeHandler('Ocean')} fontSize={'sm'} bg={checkBg('Ocean')} rounded={'full'}>Ocean</Button>
                <Button onClick={() => changeTypeHandler('Dawn')} fontSize={'sm'} bg={checkBg('Dawn')} rounded={'full'}>Dawn</Button>
                <Button onClick={() => changeTypeHandler('Animals')} fontSize={'sm'} bg={checkBg('Animals')} rounded={'full'}>Animals</Button>
                <Button onClick={() => changeTypeHandler('Design')} fontSize={'sm'} bg={checkBg('Design')} rounded={'full'}>Design</Button>
                <Button onClick={() => changeTypeHandler('Retro')} fontSize={'sm'} bg={checkBg('Retro')} rounded={'full'}>Retro</Button>
                <Button onClick={() => changeTypeHandler('School')} fontSize={'sm'} bg={checkBg('School')} rounded={'full'}>School</Button>
                <Divider orientation="vertical" borderWidth={1} height={5}/>
                <Button onClick={onToggle} leftIcon={<i className="fa-solid fa-arrow-up-wide-short"></i>} fontSize={'sm'} bg={'white'} border={'1px solid #cbd5e0ff'} _hover={{bg: 'white'}} rounded={'full'}>Filter</Button>
            </Flex>
            <FilterInNavigation isOpen={isOpen}/>
        </Box>
    )
}

export default Navigation