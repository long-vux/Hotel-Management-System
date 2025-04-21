// src/routes/AdminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Admin/Dashboard';
import Room from '../Admin/Room';
import Payment from '../Admin/Payment';
import Employee from '../Admin/Employee';
import Reservation from '../Admin/Reservation';
import AdminLayout from '../components/admin/layout/Layout';
import GuestStay from '../Admin/GuestStay';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminRoutes = () => (
  <>
    <Routes>
      <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
      <Route path="/room" element={<AdminLayout><Room /></AdminLayout>} />
      <Route path="/payment" element={<AdminLayout><Payment /></AdminLayout>} />
      <Route path="/employee" element={<AdminLayout><Employee /></AdminLayout>} />
      <Route path="/reservation" element={<AdminLayout><Reservation /></AdminLayout>} />
      <Route path="/guest-stay" element={<AdminLayout><GuestStay /></AdminLayout>} />
    </Routes>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
);

export default AdminRoutes;
