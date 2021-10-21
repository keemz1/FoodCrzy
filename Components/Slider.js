import {useState} from 'react'
import carouselImages from '../Data/JSON/Carousel.json'
import '../CSS/Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import SliderContainer from './SliderContainer'

export default function Slider() {
    const [images] = useState(carouselImages)
    return (
        <div className='slider'>
            <Carousel autoPlay infiniteLoop>
            {Object.entries(images).map(([key,value]) =>{
                    return(
                        <SliderContainer
                        key={key}
                        sliderImage={value}
                        />
                    )
                })}
            </Carousel>
        </div>
    )
}
