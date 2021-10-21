import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMenuList() {
    return (
            <ul className='menu-list'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/food'>
                    <li>Food</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
    )
}
