import React from 'react';
import { Registrations } from './Pages/Registration/Registration';
import { Login } from './Pages/LoginPage/Login';
import { Link, Routes,Route } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Registrations />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};
