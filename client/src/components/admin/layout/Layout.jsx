import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from '../../layout/Footer';

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] grid grid-rows-layout grid-cols-layout gap-2">
      <header className="bg-white rounded-md m-2 mb-0 row-start-1 row-end-2 col-span-2">
        <Header />
      </header>
      <aside className="bg-white rounded-md ml-2 row-start-2 row-end-3 col-start-1 col-end-2">
        <Sidebar />
      </aside>
      <main className="rounded-md mr-2 row-start-2 row-end-3 col-start-2 col-end-3 pb-[100px]">
        {children}
      </main>
      <footer className="bg-white rounded-md mx-2 row-start-3 row-end-4 col-span-2 pt-[100px]">
        <div className="w-3/5 mx-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default Layout;
