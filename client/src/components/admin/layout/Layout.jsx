import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from '../../layout/Footer'

const Layout = ({ children }) => {
  return (
    <div
      className='w-full min-h-screen bg-[#F1F1F1] grid grid-cols-layout gap-2 font-inter'
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <header className='bg-white rounded-md m-2 mb-0 col-span-2'>
        <Header />
      </header>
      <aside className='bg-white rounded-md ml-2 row-start-2 col-start-1 col-end-2'>
        <Sidebar />
      </aside>
      <main className='rounded-md mr-2 row-start-2 col-start-2 col-end-3'>
        {children}
      </main>
      <footer className='bg-white rounded-md mx-2 row-start-3 col-span-2 mt-[20px]'>
        <div className='w-3/5 mx-auto'>
          <Footer />
        </div>
      </footer>
    </div>
  )
}

export default Layout
