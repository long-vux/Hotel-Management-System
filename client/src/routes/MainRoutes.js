// src/routes/MainRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landingpage from '../pages/Landingpage';
import Login from '../pages/login';
import MyStays from '../pages/myStays';
import AboutUs from '../pages/aboutUs';
import Rooms from '../pages/rooms';
import ErrorPage from '../pages/errorPage';
import Layout from '../components/layout/Layout';
import Signup from '../pages/signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // This is important for styling


const MainRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/signup" element={<Layout><Signup /></Layout>} />
      <Route path="/rooms" element={<Layout><Rooms /></Layout>} />
      <Route path="/my-stays" element={<Layout><MyStays /></Layout>} />
      <Route path="/about-us" element={<Layout><AboutUs /></Layout>} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
    {/* ToastContainer should be placed here */}
    
  </>
);

export default MainRoutes;
