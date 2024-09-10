import './App.css';
//import Login from './components/Login';
//import Register from './components/Register';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/signin' element={<SignIn/>} />
        <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
