import React from 'react'

/**
 * Component for displaying Navbar
 * 
 * Todo: Add State for Navbar links, Navbar animation, make it sticky
 */
export default function Navbar() {
  return (
    <nav class="nav-box">
        <ul class="nav-list">
            <li className='nav-item'>Work</li>
            <li className='nav-item'>About</li>
            <li className='nav-item'>Play</li>
            <li className='nav-item'>Blog</li>
            <li className='nav-item'>Contact</li>
        </ul>
    </nav>
  )
}
