import { Menu, MenuButton, MenuItemOption, MenuList, Text, Button, Grid} from '@chakra-ui/react'



interface ColorPickerMenuI {
    filterByColor: (color:string) => void
    search: URLSearchParams
}

export const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink', 'black'];

const ColorPickerMenu:React.FC<ColorPickerMenuI> = ({filterByColor, search}) => {
    const renderedColors = colors.map(color => {
        return <MenuItemOption onClick={() => filterByColor(color)} w={'10px'} bg={color} rounded={search.get('color') === color ? 'lg' : 'full'}></MenuItemOption>
    })
    return(
        <Menu closeOnSelect={false}>
            <MenuButton as={Button} borderWidth={2} rounded={'full'} variant={'outline'} leftIcon={<Text color={'red.400'} className="fa-solid fa-palette"></Text>} pl={5} pr={10}>Color</MenuButton>
            <MenuList as={Grid} templateColumns='repeat(5, 1fr)' p={5} gap={3}>
                {renderedColors}
            </MenuList>
        </Menu>
    )
}

export default ColorPickerMenu