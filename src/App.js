import React from 'react';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/cart" element = {<Cart/>}/>
          <Route  path = "/" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App