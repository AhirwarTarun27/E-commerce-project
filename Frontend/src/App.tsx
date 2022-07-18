import React from 'react';
import { Registrations } from './Pages/Registration/Registration';
import { Login } from './Pages/LoginPage/Login';

export const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <Registrations /> */}
      <Login />
    </div>
  );
};
