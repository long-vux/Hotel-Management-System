import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import KingBedIcon from '@mui/icons-material/KingBed';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/admin/dashboard" activeClassName="active">
              <DashboardIcon />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/admin/guest-stay" activeClassName="active">
              <PeopleOutlineIcon />
              Guests & Stays
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/reservation" activeClassName="active">
              <CalendarMonthIcon />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/room" activeClassName="active">
              <KingBedIcon />
              Room
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/employee" activeClassName="active">
              <PeopleOutlineIcon />
              Employee
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/payment" activeClassName="active">
              <PaymentIcon />
            Payment
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/logout" activeClassName="active">
              <LogoutIcon />
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;