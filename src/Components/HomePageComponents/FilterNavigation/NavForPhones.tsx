import { Box, Button, Collapse, useDisclosure, Divider, SimpleGrid } from "@chakra-ui/react"
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { colors } from "./ColorPickerMenu"
import { useSearchParams } from "react-router-dom"

interface NavForPhonesI {
    display: Array<string>
    resetTypeHandler: () => void
    checkBg: (value: string | null) => string
    changeTypeHandler: (type: string) => void
}

const NavForPhones: React.FC<NavForPhonesI> = ({display, resetTypeHandler, checkBg, changeTypeHandler}) => {
    const [search, setSearch] = useSearchParams()
    const { isOpen, onToggle} = useDisclosure()
    const filterByColor = (color: string):void => {
        setSearch({color: color})
    }
    const renderedColors = colors.map(color => {
        return <Box w={['30px', '50px']} h={['30px', '50px']} bg={color} onClick={() => filterByColor(color)} rounded={search.get('color') === color ? 'lg' : 'full'}></Box>
    })
    return(
        <Box display={display}>
            <Button rightIcon={!isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />} onClick={onToggle} w={'100%'} transition={'all 0.2 ease'} display={'block'}>Categories</Button>
            <Collapse in={isOpen}>
                <Box my={5}>
                    <Button onClick={resetTypeHandler} bg={checkBg(null)} fontSize={['sm', 'md']} rounded={'full'}>Discover</Button>
                    <Divider my={2} orientation="horizontal" borderWidth={1}/>
                    <Button onClick={() => changeTypeHandler('Nature')} fontSize={['sm', 'md']} bg={checkBg('Nature')} rounded={'full'}>Nature</Button>
                    <Button onClick={() => changeTypeHandler('Ocean')} fontSize={['sm', 'md']} bg={checkBg('Ocean')} rounded={'full'}>Ocean</Button>
                    <Button onClick={() => changeTypeHandler('Dawn')} fontSize={['sm', 'md']} bg={checkBg('Dawn')} rounded={'full'}>Dawn</Button>
                    <Button onClick={() => changeTypeHandler('Animals')} fontSize={['sm', 'md']} bg={checkBg('Animals')} rounded={'full'}>Animals</Button>
                    <Button onClick={() => changeTypeHandler('Design')} fontSize={['sm', 'md']} bg={checkBg('Design')} rounded={'full'}>Design</Button>
                    <Button onClick={() => changeTypeHandler('Retro')} fontSize={['sm', 'md']} bg={checkBg('Retro')} rounded={'full'}>Retro</Button>
                    <Button onClick={() => changeTypeHandler('School')} fontSize={['sm', 'md']} bg={checkBg('School')} rounded={'full'}>School</Button>
                    <Divider my={2} orientation="horizontal" borderWidth={1}/>
                    <SimpleGrid columns={5} gap={2} ml={3}>
                        {renderedColors}
                    </SimpleGrid>
                </Box>
            </Collapse>
        </Box>

    )
}

export default NavForPhones