import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='main'>
        <div className="navbar">
        <div className='navlogo'>
        <h2>Flex Business Pro</h2>
        <p>Clean and modern business theme</p>
        </div>
        <div className='menu'>
            <a href=''>Home</a>
            <a href=''>About Us</a>
            <a href=''>Styleguide</a>
            <a href=''>Blog</a>
            <a href=''>Contact Us</a>
        </div>
        </div>
    </div>
  )
}

export default Navbar