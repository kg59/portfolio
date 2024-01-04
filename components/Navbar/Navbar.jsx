"use client";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateSelected } from '@/config/reducers/navReducer'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Shifter from './Shifter'
import Clock from './Clock'

/**
 * Component for displaying Navbar
 * 
 * 
 */

export default function Navbar() {
  const navItems = useSelector(state => state.nav.navItems)
  const selected = useSelector(state => state.nav.selected)
  const pathname = usePathname()
  const dispatch = useDispatch()

  useEffect(() => {
    var index = navItems.map((item) => item.link).indexOf(pathname)
    if (index != selected) {
      dispatch(updateSelected(index))
    }
  })

  return (
    <nav className="nav-box">
      <Clock/>
      <div>
        <ul className="nav-list">
          {
            navItems.map((item, index) => {
              if (index !== selected) {
                return (
                  <li key={index}>
                    <Link href={item.link} onClick={() => dispatch(updateSelected(index))}>
                      <span className='nav-item'>
                        {item.name}
                        <i className="hidden md:table-cell"><FontAwesomeIcon icon={item.icon} className="nav-icon" /></i>
                      </span>
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li key={index}>
                    <Link href={item.link} onClick={() => dispatch(updateSelected(index))}>
                      <span className='nav-item-selected'>
                        {item.name}
                        <i className="hidden md:table-cell"><FontAwesomeIcon icon={item.icon} className="nav-icon bg-green-500" /></i>
                      </span>
                    </Link>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
      <Shifter/>
    </nav>
  )
}
