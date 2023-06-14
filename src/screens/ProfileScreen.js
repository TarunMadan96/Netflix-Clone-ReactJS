import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../Firebase'
import PlansScreen from './PlansScreen'

function ProfileScreen() {
    const user = useSelector(selectUser)
  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profileScreen_body">
            <h1>Edit Profile</h1>
            <div className="profileScreen_info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWiCTAbEbHi36Yk9vO2i--CT17sAixMJLbyO5UPa9F7A&usqp=CAU&ec=48665699" alt="" />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <PlansScreen />
                        <button onClick={() => auth.signOut()}
                        className='profileScreen_signOut'>Sign Out</button>
                    </div>
            
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen