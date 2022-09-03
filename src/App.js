import { useState, useEffect } from 'react';
import Axios from 'axios';

const App = () => {
  const [age, setAge] = useState(null);
  const [name, setName] = useState('');
  const fetchData = (name) => {
    Axios.get(`https://api.agify.io/?name=${name}`)
      .then((res) => setAge(res.data.age));
  }

  return (
    <div className="App">
      <input onChange={(e) => {setName(e.target.value)}} placeholder='Name...' />
      <button onClick={() => {fetchData(name)}}>Predict age</button>
      <h1>Predicted age: {age}</h1>
    </div>
  );
}

export default App;
