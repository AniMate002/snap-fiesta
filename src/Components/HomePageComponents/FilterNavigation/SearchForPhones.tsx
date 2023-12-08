import { Box, InputGroup, InputLeftElement, Button, Input, Text} from '@chakra-ui/react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'


interface SearchForPhonesI {
    display: Array<string>
}

const SearchForPhones:React.FC<SearchForPhonesI> = ({display}) => {
    const [form, setForm] = useState<string>('')
    const [search, setSearch] = useSearchParams()
    const formHandler = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault()
        setSearch({search: form})
    }
    return(
        <Box p={1} display={display} gap={5} py={7} as='form' onSubmit={e => formHandler(e)} alignItems={'center'} justifyContent={'center'}>
            <InputGroup width={'650px'}>
                <InputLeftElement><Text color={'red.400'} className="fa-solid fa-magnifying-glass"></Text></InputLeftElement>
                <Input value={form} onChange={(e) => setForm(e.target.value)} focusBorderColor='red.400' _focus={{borderWidth: 1}} rounded={'full'} placeholder='Search' borderWidth={2}/>
            </InputGroup>
            <Button px={10} rounded={'full'} type='submit'>Find</Button>
        </Box>
    )
}

export default SearchForPhones