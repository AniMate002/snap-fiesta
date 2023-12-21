import { Box, Image, Text } from "@chakra-ui/react";
import { Photo } from "pexels";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { allHashTags } from "../../Redux/types";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { searchImages } from "../../Redux/Slices/imageSlice";

interface HashTagsSwiperI {
    cardsImages: Photo[]
}

const HashTagsSwiper:React.FC<HashTagsSwiperI> = ({cardsImages}) => {
    const [search, setSearch] = useSearchParams()
    const dispatch = useAppDispatch()
    const firstRenderedImages = cardsImages.map((item, index) => {
            if(index <= 15){
                return (
                    <SwiperSlide onClick={() => clickHandler(allHashTags[index])}>
                        <Box cursor={'pointer'} rounded={'3xl'} height={['50px','150px']} w={['60px','110px', '150px','200px', '270px']} bgImg={item.src.large2x} bgPosition={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}>
                            <Box bg={'rgba(0, 0, 0, 0.58)'} h={'100%'} w={'100%'} rounded={'3xl'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Text  _hover={{color: '#f56a6b'}} transition={'all 0.2s ease'} color={'white'} fontWeight={'bold'} fontSize={['10px','lg']}>#{allHashTags[index]}</Text>
                            </Box>
                        </Box>
                    </SwiperSlide>
                )
            }
    })
    const secondRenderedImages = cardsImages.map((item, index) => {
        if(index > 15){
            return (
                <SwiperSlide onClick={() => clickHandler(allHashTags[index])}>
                    <Box cursor={'pointer'} rounded={'3xl'} height={['50px','150px']} w={['60px','110px', '150px','200px', '270px']} bgImg={item.src.large2x} bgPosition={'center'} bgSize={'cover'} bgRepeat={'no-repeat'}>
                        <Box bg={'rgba(0, 0, 0, 0.58)'} h={'100%'} w={'100%'} rounded={'3xl'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Text _hover={{color: '#f56a6b'}} transition={'all 0.2s ease'} color={'white'} fontWeight={'bold'} fontSize={['10px','lg']}>#{allHashTags[index]}</Text>
                        </Box>
                    </Box>
                </SwiperSlide>
            )
        }
})

    const clickHandler = (query: string) => {
        setSearch({tag: query})
        // dispatch(searchImages({query}))
    }
    return (  
        <Box w={'100%'} py={10}>
            <Box as={Swiper} autoplay={{delay: 500, disableOnInteraction:true, pauseOnMouseEnter:true}} slidesPerView={5} freeMode={{sticky: false}} modules={[Autoplay]} speed={2000}>
                {firstRenderedImages}
            </Box>
            <Box mt={5} as={Swiper} autoplay={{delay: 500, disableOnInteraction:true, pauseOnMouseEnter:true, reverseDirection:true}} slidesPerView={5} freeMode={{sticky: false}} modules={[Autoplay]} speed={2000}>
                {secondRenderedImages}
            </Box>
        </Box>
    );
}
 
export default HashTagsSwiper;