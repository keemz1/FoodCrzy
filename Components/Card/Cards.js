import React from 'react'
import '../../CSS/Card.css'

export default function Cards({id, foodType, foodImage, imageNumber}) {
    return (
        <div className='card'>
            <div>
                <img className="food-image" src={foodImage} alt=""/>
            </div>
            <div className="card-body">
                <p className="card-text">Text</p>
            </div>
        </div>
    )
}
