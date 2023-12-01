import {
    Box, Button, Collapse, Input, InputGroup, InputLeftElement, Text
} from '@chakra-ui/react'

import { useState } from 'react'
import { formFilterI } from '../../../Redux/types'
import { useAppDispatch } from '../../../Redux/hooks'
import { filterImages, resetImages, searchImages } from '../../../Redux/Slices/imageSlice'


interface FilterInNavigationI {
    isOpen: boolean
}



const FilterInNavigation:React.FC<FilterInNavigationI> = ({isOpen}) => {
    const dispatch = useAppDispatch()
    const [form, setForm] = useState<formFilterI>({
        hashTags: '',
        color: ''
    })

    const filterHandler = (e:React.FormEvent<HTMLDivElement>):void => {
        e.preventDefault()
        dispatch(resetImages())
        dispatch(searchImages({page:1, query:form.hashTags}))
    }
    const updateForm = (key:string, value:string):void => {
        setForm({
            ...form,
            [key]: value
        })
    }
    return(
        <Collapse in={isOpen}>
            <Box as={'form'} p={1} display={'flex'} gap={5} onSubmit={(e) => filterHandler(e)} py={7}>
                <InputGroup>
                    <InputLeftElement><Text color={'red.400'} className="fa-solid fa-hashtag"></Text></InputLeftElement>
                    <Input value={form.hashTags} onChange={(e) => updateForm("hashTags", e.target.value)} focusBorderColor='red.400' _focus={{borderWidth: 1}} rounded={'full'} placeholder='Description' borderWidth={2}/>
                </InputGroup>
                <InputGroup>
                    <InputLeftElement><Text color={'red.400'} className="fa-solid fa-palette"></Text></InputLeftElement>
                    <Input value={form.color} onChange={(e) => updateForm("color", e.target.value)} focusBorderColor='red.400' _focus={{borderWidth: 1}} rounded={'full'} placeholder='Color' borderWidth={2}/>
                </InputGroup>
                <Button px={10} rounded={'full'} type='submit'>Find</Button>
            </Box>
        </Collapse>
    )
}

export default FilterInNavigation