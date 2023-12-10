import { Container, Divider } from "@chakra-ui/react"
import ProfileTitle from "../Components/MyProfile/ProfileTitle"
import ProfileContent from "../Components/MyProfile/ProfileContent"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../Redux/hooks"
import { useNavigate } from "react-router-dom"
import ProfileNavigation from "../Components/MyProfile/ProfileNavigation"
import { generateMyWorks } from "../Redux/Slices/userSlice"




const MyProfilePage:React.FC = () => {
    const { isAuth } = useAppSelector(state => state.user)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(!isAuth)
            navigate('/auth?var=signUp')
    }, [])
    useEffect(() => {
        dispatch(generateMyWorks())
    }, [dispatch])
    return(
        <Container maxW={'1500px'}>
            <ProfileTitle />
            <Divider my={10} colorScheme={'red.400'}/>
            <ProfileNavigation />
            <ProfileContent />
        </Container>
    )
}


export default MyProfilePage