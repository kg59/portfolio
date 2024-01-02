import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { updateSelected } from '@/config/reducers/navReducer'

/**
 * Component for displaying Navbar
 * 
 * 
 */

export default function Navbar() {
  const nav = useSelector(state => state.nav)
  const dispatch = useDispatch()

  return (
    <nav className="nav-box">
         <ul className="nav-list">
            {
                nav.navItems.map((item, index) =>{
                    if (index !== nav.selected) {
                    return (<>
                    <li key={index} className='nav-item' onClick={()=> dispatch(updateSelected(index))}>{item.name}</li>
                    <FontAwesomeIcon icon={item.icon} className="nav-icon"/>
                    </>)
                    } else {
                    return (<>
                        <li key={index} className='nav-item-selected' onClick={()=> dispatch(updateSelected(index))}>{item.name}</li>
                        <FontAwesomeIcon icon={item.icon} className="nav-icon bg-green-400"/>
                    </>)     
                    }
                })
            }
         </ul>
    </nav>
  )
}
