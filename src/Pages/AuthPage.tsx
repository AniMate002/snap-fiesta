import { useParams } from "react-router-dom"


const AuthPage:React.FC = () => {
    const {type} = useParams()
    return(
        <>
        Auth page {type}
        </>
    )
}

export default AuthPage