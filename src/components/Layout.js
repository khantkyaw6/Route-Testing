import React, { useState } from 'react';
import PrivateRoutes from '../routes/PrivateRoutes';
import Navbar from '../components/Navbar';
import Login from './Login';
import { Routes, Route, Navigate } from 'react-router-dom';

const Layout = () => {
  const [token, setToken] = useState(false);

  return (
    <div>
      {token ? (
        <div>
          <Navbar />
          <PrivateRoutes />
        </div>
      ) : (
        <>
          <Routes>
            <Route
              path='/login'
              element={<Navigate to='/login' element={<Login />} />}
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default Layout;
