import React, { useContext } from 'react';
import { AppContext } from '../App';
import ChangeProfile from './ChangeProfile';

const Profile = () => {
  const { userName } = useContext(AppContext);

  return (
    <div>
      <h1>Profile page</h1>
      <h3>User name is {userName}</h3>
      <ChangeProfile />
    </div>
  )
}

export default Profile