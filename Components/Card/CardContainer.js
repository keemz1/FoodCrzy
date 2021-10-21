import {useState,useEffect} from 'react'
import '../../CSS/CardContainer.css'
import Cards from './Cards'

export default function CardContainer({id, foodType, foodImage, imageNumbe}) {
    
    const [item, setstate] = useState([])
    useEffect(() => {
      
    }, [])

    
    function APICallFunction(){
        console.log('test')
        fetch("https://foodish-api.herokuapp.com/api")
        .then(res => res.json())
        .then((response) => {
            setstate([...item,response.image])
            console.log(item)
        })
    }
    
    return (
        <div className='card-container'>
            <button type='button' className='' onClick={()=>{APICallFunction()}}>
                Click
            </button>
            {item.map((food, id) => {
                return(
                    <Cards
                        key={id}
                        foodImage={food}
                    />
                )
            })}
        </div>
    )
}
