import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Booking from '../pages/Booking';
import SellCar from '../pages/SellCar';
import Setting from '../pages/Setting';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard' element={<Dashboard />} />}
      />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/sellcar' element={<SellCar />} />
      <Route path='/setting' element={<Setting />} />
    </Routes>
  );
};

export default PrivateRoutes;
