import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
  return (
    <>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </head>
    <Routes>
      <Route path={"/"} element={<Login/>}/>
      <Route path={"/signup"} element={<Signup/>}/>
      <Route path={"/home"} element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
