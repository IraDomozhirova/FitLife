import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Navigate } from "react-router"
import { getParams, logout } from "../../utils/auth"
import ProfileModal from "../../components/ProfileModal/ProfileModal"
import { useDispatch, useSelector } from "react-redux"
import { userParamsFetched } from "../../store/UserSlice"
import ProfileTable from "./ProfileTable"

const Profile = (props: { currentUser: any }) => {
    const [show, setShow] = useState<boolean>(false)
    // @ts-ignore
    const {userParams} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if(props.currentUser) {
            getParams(props.currentUser).then((res) => dispatch(userParamsFetched(res)))
        }
    },[props.currentUser])
    if(!props.currentUser){
        return <Navigate to='/signIn' replace/>
    }

    const logOut = () =>{
        logout()
    }
    return(
        <>
            <div className="form_wrapper">
                <h1 className="product_header">FitLife</h1>
                {!userParams ? <Button onClick={()=>setShow(true)}>Заполнить персональные данные</Button> : <ProfileTable/>}
                <Button variant='danger' onClick={() => logOut()}>Выйти</Button>
                <ProfileModal show={show} handleClose={()=>setShow(false)} currentUser={props.currentUser}/>
            </div>
        </>
    )
}

export default Profile