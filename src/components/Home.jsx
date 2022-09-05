import React, { useContext } from 'react';
import { AppContext } from '../App';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

const Home = () => {
  const {userName} = useContext(AppContext);
  const {data, isLoading, isError, refetch} = useQuery(['cat'], async () => {
    return Axios.get('https://catfact.ninja/fact').then((res) => res.data)
  });

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>There was an error</h1>
  }

  return (
    <div>
      <h1>Home page</h1>
      <h3>User name is {userName}</h3>
      <h1>{data?.fact}</h1>
      <button onClick={refetch}>Update</button>
    </div>
  )
}

export default Home