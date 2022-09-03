import React, { useState } from 'react';
import Axios from 'axios';

const Excuses = () => {
  const [data, setData] = useState('');
  const fetchExcuse = (type) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${type}/`)
    .then((res) => {
      setData(res.data[0]);
    })
  }

  return (
    <div className='Excuses'>
      <h2>Choose excuse category:</h2>
      <button onClick={() => {fetchExcuse('family')}}>Family</button>
      <button onClick={() => {fetchExcuse('office')}}>Office</button>
      <button onClick={() => {fetchExcuse('children')}}>Children</button>
      <button onClick={() => {fetchExcuse('college')}}>College</button>
      <button onClick={() => {fetchExcuse('party')}}>Party</button>
      <h3>Excuse: {data.excuse}</h3>
      <h3>Category: {data.category}</h3>
    </div>
  )
}

export default Excuses