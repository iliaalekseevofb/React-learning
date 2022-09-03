import React, { useState } from 'react';
import Axios from 'axios';

const PredictAge = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState('');
  const fetchData = (name) => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => setData(res.data));
  }

  return (
    <div className="PredictAge">
      <input onChange={(e) => {setName(e.target.value)}} placeholder='Name...' />
      <button onClick={() => {fetchData(name)}}>Predict age</button>
      <h1>Predicted age: {data?.age}</h1>
      <h1>Count: {data?.count}</h1>
    </div>
  );
}

export default PredictAge