import React from 'react'

export default function SliderContainer({sliderImage}) {
    return (
        <>
            <div className='slider-container'>
                <img className='slider-image' src={sliderImage} alt=''/>
            </div>
        </>
    )
}
