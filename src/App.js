import React, { useState } from 'react';
import Login from './component/Login';
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ReportCrimeForm from './component/ReportCrimeForm';
// s

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setLoggedIn(false);
  // };

  return (
    <div>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={(<Home/>)}/>
      <Route path='/crimereport' element={(<ReportCrimeForm/>)}/>
      <Route path='/login' element={(<Login/>)}/>

     </Routes>
     </BrowserRouter>
       
      
    </div>
  );
};

export default App;
