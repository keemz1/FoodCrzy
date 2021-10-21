import React from 'react'
import '../CSS/Food.css'
import CardContainer from './Card/CardContainer'
import FoodChoice from './FoodChoice'

export default function Food() {
    return (
        <div>
            <FoodChoice/>
            <CardContainer/>
        </div>
    )
}
