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
    const updateForm = (key:string, value:string):void => {
        setForm({
            ...form,
            [key]: value
        })
    }
    const filterByColor = (color:string):void => {
        setForm({hashTags: '', color: ''})
        setSearch({color: color})
    }
    const formHandler = (e:React.FormEvent<HTMLDivElement>):void => {
        e.preventDefault()
        setSearch({search: form.hashTags})
    }
    return(
        <Collapse in={isOpen}>
            <Box p={1} display={['none', 'none', 'flex']} gap={5} py={7} as='form' onSubmit={e => formHandler(e)} alignItems={'center'} justifyContent={'center'}>
                <InputGroup width={'650px'}>
                    <InputLeftElement><Text color={'red.400'} className="fa-solid fa-magnifying-glass"></Text></InputLeftElement>
                    <Input value={form.hashTags} onChange={(e) => updateForm("hashTags", e.target.value)} focusBorderColor='red.400' _focus={{borderWidth: 1}} rounded={'full'} placeholder='Search' borderWidth={2}/>
                </InputGroup>
                <ColorPickerMenu search={search} filterByColor={filterByColor}/>
                <Button px={10} rounded={'full'} type='submit'>Find</Button>
            </Box>
        </Collapse>
    )
}

export default FilterInNavigation