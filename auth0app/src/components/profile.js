import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty';


const Profile = () => {
    const {user}=useAuth0();
  return (
    <div>
        <JSONPretty data={user}></JSONPretty>
        <h1>{user==null?"null":"verified user"}</h1>
    </div>
  )
}

export default Profile