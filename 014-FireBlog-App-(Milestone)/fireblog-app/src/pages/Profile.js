import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../auth/firebase';
import profile from '../assets/profile.jpg'

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
    {console.log(currentUser)}
    <div className="container py-5" style={{backgroundColor: "rgba(255, 0, 0, 0.5)", borderRadius: "40px", textAlign: "center", width:"400px", marginTop:"5%"}}>
      <h1>{currentUser.displayName}</h1>
        <img
        style={{width:"350px", height:"500px", borderRadius:"10px"}}
            src={profile}
            alt={currentUser.displayName}
          />
      <h4>{currentUser.email}</h4>
      <p style={{margin:"5px"}}>
        Joined on :
        {currentUser.metadata.creationTime}
      </p>
    </div> 
    </>
  )
}

export default Profile