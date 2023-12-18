import { Box, Button, Checkbox, CheckboxGroup, Divider, Input, SimpleGrid, Text, useStatStyles } from "@chakra-ui/react";
import { ArtistsFormStateI, experienceI, genderI } from "../../Redux/types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form'

interface ArtistSearchFormI {
    form: ArtistsFormStateI
    setForm: (form: ArtistsFormStateI) => void
}

type Inputs = {
    keyword: string
    country: string
    male: boolean
    female: boolean
    '0-2':boolean
    '2-5': boolean
    '5-10': boolean
    '10+': boolean
}

const ArtistSearchForm:React.FC<ArtistSearchFormI> = ({form, setForm}) => {
    const { register, handleSubmit, formState: {errors, isValid}} = useForm<Inputs>()
    const [search, setSearch] = useSearchParams()
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setForm(data);
    
        const searchParamsObject = {
            page: '1',
            keyword: data.keyword,
            country: data.country,
            male: `${data.male}`,
            female: `${data.female}`,
            '0-2': `${data['0-2']}`,
            '2-5': `${data['2-5']}`,
            '5-10': `${data['5-10']}`,
            '10+': `${data['10+']}`,
        };
    
        const filteredSearchParams = Object.fromEntries(
            Object.entries(searchParamsObject).filter(([_, value]) => value !== undefined && value !== '' && value !== 'false')
        );
    
        setSearch(filteredSearchParams)
    };
    
    

    return (  
        <Box border={'2px solid #edf2f7'} height={'fit-content'} p={5} rounded={'xl'} bgColor={'red.50'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Text fontWeight={'bold'} mb={4} fontSize={'sm'}>Keyword search</Text>
                    <Input {...register('keyword')}  focusBorderColor="red.400" bgColor={'red.50'} _placeholder={{color: 'red.400', fontsize: 'sm'}} borderWidth={1} type="text" placeholder="Search..."/>
                </Box>
                <Box mt={10}>
                    <Text fontWeight={'bold'} mb={3} fontSize={'sm'}>Country</Text>
                    <Input {...register('country')} color={'red.400'} focusBorderColor="red.400" bgColor={'red.50'} _placeholder={{color: 'red.400'}} borderWidth={1} type="text" placeholder="Search..."/>
                </Box>
                <Box mt={10}>
                    <Text fontWeight={'bold'} mb={3} fontSize={'md'}>Gender</Text>
                    <CheckboxGroup>
                        <Checkbox {...register('male')} size={'md'} mr={4} colorScheme="blue">Male</Checkbox>
                        <Checkbox {...register('female')} colorScheme="pink">Female</Checkbox>
                    </CheckboxGroup>
                </Box>
                <Divider my={5} />
                <Box>
                    <Text fontWeight={'bold'} mb={3} fontSize={'md'}>Experience</Text>
                    <CheckboxGroup>
                        <SimpleGrid columns={2}>
                            <Checkbox {...register('0-2')} size={'sm'} mr={4} colorScheme="red">0-2 years</Checkbox>
                            <Checkbox {...register('2-5')}  size={'sm'} mr={4} colorScheme="red">2-5 years</Checkbox>
                            <Checkbox {...register('5-10')}  size={'sm'} mr={4} colorScheme="red">5-10 years</Checkbox>
                            <Checkbox {...register('10+')}  size={'sm'} mr={4} colorScheme="red">10+ years</Checkbox>
                        </SimpleGrid>
                    </CheckboxGroup>
                </Box>
                <Button bgColor={'red.400'} rounded={'full'} color={'white'} fontSize={'sm'} display={'block'} mx={'auto'} mt={10} type="submit">Search</Button>
            </form>
        </Box>
    );
}
 
export default ArtistSearchForm;