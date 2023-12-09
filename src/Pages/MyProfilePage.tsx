import { Container, Divider } from "@chakra-ui/react"
import ProfileTitle from "../Components/MyProfile/ProfileTitle"
import ProfileContent from "../Components/MyProfile/ProfileContent"
import { useEffect } from "react"
import { useAppSelector } from "../Redux/hooks"
import { useNavigate } from "react-router-dom"




const MyProfilePage:React.FC = () => {
    const { isAuth } = useAppSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuth)
            navigate('/auth?var=signUp')
    }, [])
    return(
        <Container maxW={'1500px'}>
            <ProfileTitle />
            <ProfileContent />
        </Container>
    )
}


export default MyProfilePage