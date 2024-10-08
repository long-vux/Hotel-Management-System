import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dashboard, PeopleOutline, KingBed, Payment, CalendarMonth, Logout } from '@mui/icons-material';

const Sidebar = () => {

  const activeStyle = "bg-[#dbe9f5] border-r-4 border-black";
  const inactiveStyle = "text-gray-700";

  return (
    <div className="sidebar h-full flex flex-col justify-between">
      <ul className=' h-full m-4 text-[16px] flex flex-col gap-1'>
        <li>
          <NavLink
            exact
            to="/admin/dashboard"
            className={({ isActive }) => `flex items-center gap-4 p-2   ${isActive ? activeStyle : inactiveStyle} `}
          >
            <Dashboard />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/admin/guest-stay"
            className={({ isActive }) => `flex items-center gap-4 p-2 ${isActive ? activeStyle : inactiveStyle} `}
          >
            <PeopleOutline />
            <span>Guests & Stays</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/reservation"
            className={({ isActive }) => `flex items-center gap-4 p-2 ${isActive ? activeStyle : inactiveStyle} `}
          >
            <CalendarMonth />
            <span>Reservation</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/room"
            className={({ isActive }) => `flex items-center gap-4 p-2 ${isActive ? activeStyle : inactiveStyle} `}
          >
            <KingBed />
            <span>Room</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/employee"
            className={({ isActive }) => `flex items-center gap-4 p-2 ${isActive ? activeStyle : inactiveStyle} `}
          >
            <PeopleOutline />
            <span>Employee</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/payment"
            className={({ isActive }) => `flex items-center gap-4 p-2 ${isActive ? activeStyle : inactiveStyle} `}
          >
            <Payment />
            <span>Payment</span>
          </NavLink>
        </li>
      </ul>
      <NavLink
        to="/admin/logout"
        className='flex items-center gap-4 p-6 pl-8'
      >
        <Logout />
        <span>Log out</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
