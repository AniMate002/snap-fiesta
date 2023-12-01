import {
    Box, Button, Collapse, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuList, Text, MenuOptionGroup, MenuItemOption, MenuDivider, Grid
} from '@chakra-ui/react'

import { ArrowDownIcon } from '@chakra-ui/icons'

import { useState } from 'react'
import { formFilterI } from '../../../Redux/types'
import { useAppDispatch } from '../../../Redux/hooks'
import { filterImages, resetImages, searchImages } from '../../../Redux/Slices/imageSlice'
import { useSearchParams } from 'react-router-dom'
import ColorPickerMenu from './ColorPickerMenu'


interface FilterInNavigationI {
    isOpen: boolean
}



const FilterInNavigation:React.FC<FilterInNavigationI> = ({isOpen}) => {
    const dispatch = useAppDispatch()
    const [form, setForm] = useState<formFilterI>({
        hashTags: '',
        color: ''
    })
    const [search, setSearch] = useSearchParams()
    const filterHandler = ():void => {
        dispatch(resetImages())
        dispatch(searchImages({page:1, query:form.hashTags}))
    }
    const updateForm = (key:string, value:string):void => {
        setForm({
            ...form,
            [key]: value
        })
    }
    const filterByColor = (color:string):void => {
        setForm({hashTags: '', color: ''})
        dispatch(resetImages())
        setSearch({color: color})
        dispatch(searchImages({page: 1, query: color}))
    }
    return(
        <Collapse in={isOpen}>
            <Box p={1} display={'flex'} gap={5} py={7}>
                <InputGroup>
                    <InputLeftElement><Text color={'red.400'} className="fa-solid fa-magnifying-glass"></Text></InputLeftElement>
                    <Input value={form.hashTags} onChange={(e) => updateForm("hashTags", e.target.value)} focusBorderColor='red.400' _focus={{borderWidth: 1}} rounded={'full'} placeholder='Search' borderWidth={2}/>
                </InputGroup>
                <ColorPickerMenu search={search} filterByColor={filterByColor}/>
                <Button px={10} rounded={'full'} onClick={filterHandler} type='submit'>Find</Button>
            </Box>
        </Collapse>
    )
}

export default FilterInNavigation