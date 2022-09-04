import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

const ChangeProfile = () => {
  const { setUserName } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState('');

  return (
    <div>
      <input onChange={(e) => {setNewUserName(e.target.value)}} placeholder='New username...' />
      <button onClick={() => {setUserName(newUserName)}}>Change username</button>
    </div>
  )
}

export default ChangeProfile