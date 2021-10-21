import React from 'react'
import '../CSS/Search.css'
import searchIcon from '../Data/img/search.png'

export default function Search() {
    return (
        <div className='search'>
            <input className='search-bar' type='text' placeholder='Food Search...'/>
            <button className='search-btn'>
                <img className='search-btn-icon' src={searchIcon} alt=''/>
                <i className='fa fa-search'></i>
            </button>
        </div>
    )
}
