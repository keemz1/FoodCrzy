import React from 'react'
import '../CSS/FoodChoice.css'
import burger from '../Data/img/food/burger.png'
import donut from '../Data/img/food/donut.png'
import onigiri from '../Data/img/food/onigiri.png'
import pizza from '../Data/img/food/pizza.png'
import pasta from '../Data/img/food/pasta.png'

export default function FoodChoice() {
    return (
        <div className='food-choice-container'>
            <div className='food-component'>
                <img className='food-icon' src={burger} alt=''/>
            </div>
            <div className='food-component'>
                <img className='food-icon' src={pizza} alt=''/>
            </div>
            <div className='food-component'>
                <img className='food-icon' src={onigiri} alt=''/>
            </div>
            <div className='food-component'>
                <img className='food-icon' src={donut} alt=''/>
            </div>
            <div className='food-component'>
                <img className='food-icon' src={pasta} alt=''/>
            </div>
        </div>
    )
}
