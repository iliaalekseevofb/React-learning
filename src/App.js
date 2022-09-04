import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PredictAge from './components/PredictAge';
import Excuses from './components/Excuses';
import Home from './components/Home';
import Profile from './components/Profile';

export const AppContext = createContext();

const App = () => {
  const [userName, setUserName] = useState('Ilia');

  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
        <BrowserRouter>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/predict-age'>Predict age</Link>
            <Link to='/excuses'>Excuses</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/predict-age' element={<PredictAge />} />
            <Route path='/excuses' element={<Excuses />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
