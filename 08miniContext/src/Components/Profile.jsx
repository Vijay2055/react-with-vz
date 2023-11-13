import React,{useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user}=useContext(UserContext)

    if(!user) return <div>Please first Login</div>
    return <div>{`Welcome ${user.username}, to be here`}</div>
  
}

export default Profile
