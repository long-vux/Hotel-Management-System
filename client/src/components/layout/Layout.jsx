import React from 'react'
import Header from './Header' // Assuming Header component is defined
import Footer from './Footer' // Assuming Footer component is defined

export default function Layout ({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className=''>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
