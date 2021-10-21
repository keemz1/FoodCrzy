import React from 'react'
import '../../CSS/Nav.css'
import logo from '../../Data/img/logo.png'
import Search from '../Search'
import NavMenuList from './NavMenuList'

export default function Nav() {
    return (
        <div className='nav-menu'>
            <div className='logo-container'>
                <img className='logo-image' src={logo} alt=''/>
            </div>
            <Search/>
            <NavMenuList/>
        </div>
    )
}
