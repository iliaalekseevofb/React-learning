import React, { useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {
  const {userName} = useContext(AppContext);
  return (
    <div>
      <h1>Home page</h1>
      <h3>User name is {userName}</h3>
    </div>
  )
}

export default Home