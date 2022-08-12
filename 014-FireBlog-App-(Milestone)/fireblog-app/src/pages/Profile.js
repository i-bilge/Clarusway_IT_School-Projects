import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../auth/firebase';

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>Profile
      {console.log({currentUser})}
    </div>
  )
}

export default Profile