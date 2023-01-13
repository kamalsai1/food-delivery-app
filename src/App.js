import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Cuisine from './Components/Cuisine';
import Profile from './Components/Profile';
import Cart from './Components/Cart';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/Cuisine' element={<Cuisine />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Cart' element={<Cart />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
